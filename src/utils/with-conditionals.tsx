import _ from 'lodash'
import React, { forwardRef } from 'react'
import type { ComponentType, ForwardedRef, PropsWithoutRef, ReactNode } from 'react'

const conditionalKeys: (keyof ConditionalProps)[] = ['fallback', 'override', 'renderIf', 'excludeChildren']

type ConditionalizedProps<P> = PropsWithoutRef<P & ConditionalProps>

export const withConditionals = <P,>(
  OriginalComponent: ComponentType<P & { ref?: ForwardedRef<unknown> }>
) => {
  return forwardRef<unknown, ConditionalizedProps<P>>((props, ref) => {
    const { fallback, override, renderIf = true, excludeChildren = false } = _.pick(
      props,
      conditionalKeys
    ) as Partial<ConditionalProps>

    const originalProps = _.omit(props, conditionalKeys) as P & { children?: ReactNode }

    let renderEl: ReactNode = null
    switch (true) {
      case excludeChildren === true:
        renderEl = originalProps?.children
        break
      case renderIf === true:
        renderEl = <OriginalComponent {...originalProps} ref={ref} />
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

export interface ConditionalProps {
  renderIf?: boolean
  override?: ReactNode
  fallback?: ReactNode
  excludeChildren?: boolean
}
