import type { FC } from 'react'
import React, { ReactNode } from 'react'
import { flexifyParams } from 'flexifyparams'

interface ConditionalProps {
  renderIf?: boolean
  override?: ReactNode
  children?: ReactNode
  fallback?: ReactNode
  execludeChildren?: boolean
}

type FC2<P extends object> = (props: P) => ReactNode

function withConditionals<PROPS extends object>(OriginalComponent: FC<PROPS>): FC2<PROPS & ConditionalProps> {
  return (props) => {
    const f = <React.Fragment />
    const {
      children = f,
      fallback = f,
      override = f,
      renderIf = true,
      execludeChildren = false,
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
