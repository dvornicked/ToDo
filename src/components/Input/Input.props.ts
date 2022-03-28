import { HTMLAttributes } from 'react'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  addTask(text: string): void
}
