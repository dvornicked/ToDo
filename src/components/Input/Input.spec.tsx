import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

const addTask = jest.fn()

describe('Input compoent', () => {
  it('Input renders', () => {
    render(<Input addTask={addTask} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Typing in Input', () => {
    render(<Input addTask={addTask} />)

    expect(screen.queryByDisplayValue(/Task/i)).toBeNull()
    userEvent.type(screen.getByRole('textbox'), 'Task')
    expect(screen.getByDisplayValue(/Task/i)).toBeInTheDocument()
  })
})
