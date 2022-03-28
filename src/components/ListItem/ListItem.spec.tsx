import { render, screen } from '@testing-library/react'

import ListItem from './ListItem'
import { ITask } from './ListItem.props'

const task: ITask = { text: 'Task 1' }
const funcTask = {
  setImportant: jest.fn(),
  setDone: jest.fn(),
  deleteTask: jest.fn(),
}

describe('ListItem component', () => {
  it('ListItem renders', () => {
    render(<ListItem funcTask={funcTask} task={task} idx={0} />)

    expect(screen.getByText('Task 1')).toBeInTheDocument()
  })

  it('ListItem snapshot', () => {
    const view = render(<ListItem funcTask={funcTask} task={task} idx={0} />)
    expect(view).toMatchSnapshot()
  })
})
