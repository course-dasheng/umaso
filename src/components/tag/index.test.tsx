import { describe, it } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from './index'

describe('<Tag />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi'
    render(<Tag />)
    expect(screen.queryByText(msg)).toBeInTheDocument()
  })
})
