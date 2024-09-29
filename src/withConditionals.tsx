import _ from 'lodash'
import React, { forwardRef } from 'react'
import type { ConditionalProps } from './types'
import type { FC, PropsWithoutRef } from 'react'

function withConditionals<P>(OriginalComponent: FC<P>) {
  return forwardRef((props: PropsWithoutRef<P & ConditionalProps>, ref) => {
    const conditionalKeys = ['fallback', 'override', 'renderIf', 'excludeChildren']
    const { fallback, override, renderIf = true, excludeChildren = false } = _.pick(props, conditionalKeys)

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
  })
}

export default withConditionals
