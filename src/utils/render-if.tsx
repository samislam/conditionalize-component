import React, { type PropsWithChildren } from 'react'
import { withConditionals } from './with-conditionals'

export const RenderIf = withConditionals(({ children, ...props }: PropsWithChildren) => (
  <React.Fragment {...props}>{children}</React.Fragment>
))
