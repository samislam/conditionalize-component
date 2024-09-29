import React from 'react'
import withConditionals from './withConditionals'

export const DivIf = withConditionals(({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
))

export default DivIf
