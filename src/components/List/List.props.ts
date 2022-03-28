import { HTMLAttributes } from 'react'
import { IFuncTask, ITask } from '../ListItem/ListItem.props'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  tasks: ITask[]
  funcTask: IFuncTask
}
