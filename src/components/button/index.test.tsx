import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it } from 'vitest'
import Button from './index.tsx'

describe('测试按钮', () => {
  it('按钮type', () => {
    const component = renderer.create(
      <Button type="primary">umaso</Button>,
    )
    const { type, props } = component.toJSON()
    expect(type).toBe('button')
    expect(props.className).toContain('el-button--primary')
  })
})

// manually trigger the callback
// tree.props.onMouseEnter()

// // re-rendering
// tree = toJson(component)
// expect(tree).toMatchSnapshot()

// // manually trigger the callback
// tree.props.onMouseLeave()
