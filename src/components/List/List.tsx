import cn from 'classnames'
import { ListProps } from './List.props'
import styles from './List.module.scss'
import ListItem from '../ListItem/ListItem'

function List({
  tasks,
  funcTask,
  className,
  ...props
}: ListProps) {
  return (
    <ul className={cn(styles.list, className)} {...props}>
      {tasks.map((task, idx) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          task={task}
          funcTask={funcTask}
          idx={idx}
        />
      ))}
    </ul>
  )
}

export default List
