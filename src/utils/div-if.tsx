import type { HTMLAttributes } from 'react'
import { withConditionals } from './with-conditionals'

export const DivIf = withConditionals(({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
))

export default DivIf
