import React, { type PropsWithChildren } from 'react'
import { withConditionals } from './withConditionals'

export const RenderIf = withConditionals(({ children, ...props }: PropsWithChildren) => (
  <React.Fragment {...props}>{children}</React.Fragment>
))
