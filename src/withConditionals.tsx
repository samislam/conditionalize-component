import React from 'react'
import type { FC } from 'react'
import { flexifyParams } from 'flexifyparams'
import type { ConditionalProps } from './global.model'

function withConditionals<PROPS extends object>(OriginalComponent: FC<PROPS>): FC<PROPS & ConditionalProps> {
  return (props) => {
    const {
      children,
      fallback,
      override,
      renderIf = true,
      execludeChildren = false,
      ...originalProps
    } = flexifyParams(props as ConditionalProps)
    let renderEl: any
    switch (true) {
      case execludeChildren === true:
        renderEl = children
        break
      case renderIf === true:
        renderEl = <OriginalComponent {...(originalProps as PROPS)} />
        break
      case !!override:
        renderEl = override
        break
      default:
        renderEl = fallback
    }

    return <React.Fragment>{renderEl}</React.Fragment>
  }
}

export default withConditionals
