import React, { PropsWithChildren } from 'react'
import withConditionals from 'withConditionals'

export const RenderIf = withConditionals(({ children, ...props }: PropsWithChildren) => (
  <React.Fragment {...props}>{children}</React.Fragment>
))

export default RenderIf
