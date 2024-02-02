import _ from 'lodash'
import type { FC, Ref } from 'react'
import React, { forwardRef } from 'react'
import { flexifyParams } from 'flexifyparams'
import type { ConditionalProps } from './types'

function withConditionals<PROPS>(OriginalComponent: FC<PROPS>) {
  const ConditionalizedComponent = (props: PROPS & ConditionalProps, ref: Ref<unknown>) => {
    const conditionalKeys = ['fallback', 'override', 'renderIf', 'execludeChildren']
    const {
      fallback,
      override,
      renderIf = true,
      execludeChildren = false,
    } = flexifyParams(_.pick(props, conditionalKeys))
    const originalProps = _.omit(props, conditionalKeys) as any

    let renderEl: any
    switch (true) {
      case execludeChildren === true:
        renderEl = originalProps?.children
        break
      case renderIf === true:
        renderEl = <OriginalComponent {...(originalProps as PROPS)} ref={ref} />
        break
      case !!override:
        renderEl = override
        break
      default:
        renderEl = fallback
    }

    return <React.Fragment>{renderEl}</React.Fragment>
  }
  return forwardRef(ConditionalizedComponent)
}

export default withConditionals
