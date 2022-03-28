/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.module.scss'
import { ReactComponent as Trash } from './trash.svg'
import { ReactComponent as Exclamation } from './exclamation.svg'

function ListItem({
  task: { text, important = false, done = false },
  funcTask: { deleteTask, setDone, setImportant },
  idx,
  className,
  ...props
}: ListItemProps) {
  const handleKeyDown = () => {}
  return (
    <li className={cn(styles['list-item'], className)} {...props}>
      <span
        className={cn(styles.text, {
          [styles.important]: important,
          [styles.done]: done,
        })}
        onClick={() => setDone(idx)}
        onKeyDown={handleKeyDown}
        role="term"
      >
        {text}
      </span>
      <button
        type="button"
        className={cn(styles.button, styles.exclamation, {
          [styles.toggled]: important,
        })}
        title="Exclamation"
        onClick={() => {
          setImportant(idx)
        }}
      >
        <Exclamation />
      </button>
      <button
        type="button"
        className={cn(styles.button, styles.trash)}
        title="Trash"
        onClick={() => deleteTask(idx)}
      >
        <Trash />
      </button>
    </li>
  )
}

export default ListItem
