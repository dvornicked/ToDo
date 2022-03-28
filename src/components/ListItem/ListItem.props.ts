import { HTMLAttributes } from 'react'

export interface IFuncTask {
  deleteTask(idx: number): void
  setImportant(idx: number): void
  setDone(idx: number): void
}

export interface ITask {
  text: string
  important?: boolean
  done?: boolean
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  task: ITask
  funcTask: IFuncTask
  idx: number
}
