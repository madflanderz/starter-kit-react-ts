import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('has headline', () => {
    const { getByText } = render(<App />)
    expect(getByText('Starter Kit')).toBeInTheDocument()
  })
})
