import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import React from 'react'
import { render } from '@testing-library/react'
import { Welcome } from './welcome'

describe('<Welcome /> component', () => {
  test('Check initial render', () => {
    const { getByTestId } = render(<Welcome />)
    expect(getByTestId('welcome')).toBeInTheDocument()
  })
})
