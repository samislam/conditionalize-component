import type { ReactNode } from 'react'

export interface ConditionalProps {
  renderIf?: boolean
  override?: ReactNode
  fallback?: ReactNode
  execludeChildren?: boolean
}
