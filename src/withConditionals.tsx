import React from 'react'
import type { FC, ReactElement } from 'react'
import { flexifyParams } from 'flexifyparams'

interface ConditionalProps {
  renderIf?: boolean
  override?: ReactElement
  children?: ReactElement
  fallback?: ReactElement
  execludeChildren?: boolean
}

function withConditionals<PROPS extends object>(OriginalComponent: FC<PROPS>): FC<PROPS & ConditionalProps> {
  return (props) => {
    const f = <React.Fragment />
    const {
      children = f,
      execludeChildren = false,
      fallback = f,
      override = f,
      renderIf = true,
      ...originalProps
    } = flexifyParams(props as ConditionalProps)
    switch (true) {
      case execludeChildren === true:
        return children
      case renderIf === true:
        return <OriginalComponent {...(originalProps as PROPS)} />
      case !!override:
        return override
      default:
        return fallback
    }
  }
}

export default withConditionals
