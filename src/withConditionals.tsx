import _ from 'lodash'
import type { FC, PropsWithoutRef, Ref } from 'react'
import React, { forwardRef } from 'react'
import { flexifyParams } from 'flexifyparams'
import type { ConditionalProps } from './types'

function withConditionals<P>(OriginalComponent: FC<P>) {
  const ConditionalizedComponent = (props: PropsWithoutRef<P & ConditionalProps>, ref: Ref<unknown>) => {
    const conditionalKeys = ['fallback', 'override', 'renderIf', 'excludeChildren']
    const {
      fallback,
      override,
      renderIf = true,
      excludeChildren = false,
    } = flexifyParams(_.pick(props, conditionalKeys))

    const originalProps = _.omit(props, conditionalKeys) as any

    let renderEl: any
    switch (true) {
      case excludeChildren === true:
        renderEl = originalProps?.children
        break
      case renderIf === true:
        renderEl = <OriginalComponent {...(originalProps as P)} ref={ref} />
        break
      case !!override:
        renderEl = override
        break
      default:
        renderEl = fallback
    }

    return <React.Fragment>{renderEl}</React.Fragment>
  }

  return forwardRef(ConditionalizedComponent!)
}

export default withConditionals
