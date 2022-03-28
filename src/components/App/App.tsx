import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Input from '../Input'
import List from '../List'
import { IFuncTask, ITask } from '../ListItem/ListItem.props'
import styles from './App.module.scss'

function App() {
  const data = localStorage.getItem('state')
  const [state, setState] = useState<ITask[]>(
    data !== null ? JSON.parse(data) : [],
  )

  const addTask = (text: string) => {
    if (text === '') return
    setState([...state, { text }])
  }

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  const setDone = (idx: number) => {
    const isDone = !state[idx].done
    setState([
      ...state.slice(0, idx),
      { ...state[idx], done: isDone },
      ...state.slice(idx + 1),
    ])
  }

  const setImportant = (idx: number) => {
    const isImportant = !state[idx].important
    setState([
      ...state.slice(0, idx),
      { ...state[idx], important: isImportant },
      ...state.slice(idx + 1),
    ])
  }

  const deleteTask = (idx: number) => {
    setState([...state.slice(0, idx), ...state.slice(idx + 1)])
  }

  const funcTask: IFuncTask = {
    deleteTask,
    setDone,
    setImportant,
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>ToDo</h1>
      <AnimatePresence>
        <List key="List" tasks={state} funcTask={funcTask} />
        <Input key="Input" addTask={addTask} className={styles.input} />
      </AnimatePresence>
    </div>
  )
}

export default App
