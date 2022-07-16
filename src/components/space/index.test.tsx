import type { ReactTestRendererJSON } from 'react-test-renderer'
import { describe, it } from 'vitest'
import * as React from 'react'
import renderer from 'react-test-renderer'
import Tag from '../tag/index'
import Space from './index'

describe('测试标签', () => {
  it('render Tag ', () => {
    const rest = renderer.create(
      <div>
        <Space>
          <Tag>标签 0</Tag>
          <Tag size="mini">标签 1</Tag>
          <Tag size="small">标签 2</Tag>
          <Tag size="medium">标签 3</Tag>
        </Space>
      </div>,
    )
    expect(rest).toMatchSnapshot()
  })
  it('Space direction', () => {
    const rest = renderer.create(
      <Space direction="vertical">
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
      </Space>,
    )

    const json = rest.toJSON() as ReactTestRendererJSON
    const className = json.props.className
    expect(className).toContain('el-space--vertical')
  })
  it('Space size', () => {
    const rest = renderer.create(
      <Space size={60}>
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
      </Space>,
    )
    const json = rest.toJSON() as ReactTestRendererJSON
    expect(json.props.style.gap).toEqual('60px')
  })
  it('Space align', () => {
    const rest = renderer.create(
      <Space align="center">
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
      </Space>,
    )

    const json = rest.toJSON() as ReactTestRendererJSON
    const className = json.props.className
    expect(className).toContain('el-space--align-center')
  })
  it('Space wrap', () => {
    const rest = renderer.create(
      <Space wrap>
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
      </Space>,
    )
    const json = rest.toJSON() as ReactTestRendererJSON
    expect(json.props.style.flexWrap).toEqual('wrap')
  })
  it('Space split', () => {
    const rest = renderer.create(
      <Space split="|">
        <Tag>标签 0</Tag>
        <Tag size="mini">标签 1</Tag>
        <Tag size="small">标签 2</Tag>
        <Tag size="medium">标签 3</Tag>
      </Space>,
    )

    const json = rest.toJSON() as ReactTestRendererJSON
    const children = json.children
    expect(children?.length).toEqual(7)
  })
})
