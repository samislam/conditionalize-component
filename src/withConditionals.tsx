import _ from 'lodash'
import React, { PropsWithChildren } from 'react'
import type { FC } from 'react'
import { flexifyParams } from 'flexifyparams'
import type { ConditionalProps } from './global.model'

function withConditionals<PROPS extends PropsWithChildren>(OriginalComponent: FC<PROPS>): FC<PROPS & ConditionalProps> {
  return (props) => {
    const conditionalKeys = ['fallback', 'override', 'renderIf', 'execludeChildren']
    const {
      fallback,
      override,
      renderIf = true,
      execludeChildren = false,
    } = flexifyParams(_.pick(props, conditionalKeys))
    const originalProps = _.omit(props, conditionalKeys)

    let renderEl: any
    switch (true) {
      case execludeChildren === true:
        renderEl = originalProps.children
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
