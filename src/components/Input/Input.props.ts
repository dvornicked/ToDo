import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps
  extends Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  addTask(text: string): void
}
