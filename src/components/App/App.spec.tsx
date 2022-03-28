import { render, screen } from '@testing-library/react'
import App from './App'

it('renders Hello App title', () => {
  render(<App />)
  const titleElement = screen.getByText(/ToDo/i)
  expect(titleElement).toBeInTheDocument()
})
