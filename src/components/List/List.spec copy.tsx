import { render, screen } from '@testing-library/react'
import { IFuncTask, ITask } from '../ListItem/ListItem.props'

import List from './List'

const tasks: ITask[] = [
  { text: 'Task 1' },
  { text: 'Task 2' },
]

const funcTask: IFuncTask = {
  deleteTask: jest.fn(),
  setImportant: jest.fn(),
  setDone: jest.fn(),
}

describe('List compoent', () => {
  it('List renders', () => {
    render(<List tasks={tasks} funcTask={funcTask} />)

    expect(screen.getByText('Task 1')).toBeInTheDocument()
  })

  it('List snapshot', () => {
    const view = render(<List tasks={tasks} funcTask={funcTask} />)

    expect(view).toMatchSnapshot()
  })
})
