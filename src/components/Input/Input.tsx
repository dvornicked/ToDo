import cn from 'classnames'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './Input.module.scss'
import { InputProps } from './Input.props'
import { ReactComponent as Plus } from './plus.svg'

function Input({ addTask, className, ...props }: InputProps) {
  const [state, setState] = useState<string>('')
  return (
    <div className={cn(styles['input-box'], className)} {...props}>
      <input
        type="text"
        className={styles.input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setState(e.target.value)
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            addTask(state)
            setState('')
          }
        }}
        value={state}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          addTask(state)
          setState('')
        }}
      >
        <Plus />
      </button>
    </div>
  )
}

export default Input
