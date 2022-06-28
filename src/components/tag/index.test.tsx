import type { ReactTestRendererJSON } from 'react-test-renderer'
import { describe, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'
import Tag from './index'

describe('测试标签', () => {
  it('render Tag ', () => {
    const rest = renderer.create(<Tag>测试</Tag>)
    expect(rest).toMatchSnapshot()
  })
  it('Tag visible and closeable', () => {
    const onClose = vi.fn(() => {})

    // props change
    const { baseElement, rerender } = render(<Tag visible={false} closeable={true} onClose={onClose} >测试</Tag>)
    expect(baseElement.querySelector('.el-tag-hidden')).toBeInTheDocument()
    // expect(baseElement.querySelector(".el-tag-hidden")).toBeTruthy () // 凑合也可以
    rerender(<Tag visible={true} closeable={true} onClose={onClose} >测试</Tag>)
    expect(baseElement.querySelector('.el-tag-hidden')).toBeNull()

    const closeBtn = baseElement.querySelector('.el-tag-close-icon') as Element
    expect(closeBtn).toBeInTheDocument()
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
  it('Tag close Icon', () => {
    const { baseElement } = render(<Tag closeable={true} closeIcon={<span className="close-comp" >close</span>} >测试</Tag>)

    const closeCompNode = baseElement.querySelector('.close-comp') as Element
    expect(closeCompNode).toBeInTheDocument()
  })
  it('Tag type and color and effect', () => {
    const rest1 = renderer.create(<Tag type="success">test type</Tag>)
    const rest2 = renderer.create(<Tag color="magenta">test color</Tag>)
    const rest3 = renderer.create(<Tag effect="plain" >test color</Tag>)
    const rest4 = renderer.create(<Tag color="#fff" >test color</Tag>)
    const rest5 = renderer.create(<Tag style={{ color: '#fff' }} >test color</Tag>)
    const rest6 = renderer.create(<Tag color="#fff" style={{ color: '#fff' }}>test color</Tag>)
    const json1 = rest1.toJSON() as ReactTestRendererJSON
    const json2 = rest2.toJSON() as ReactTestRendererJSON
    const json3 = rest3.toJSON() as ReactTestRendererJSON
    const json4 = rest4.toJSON() as ReactTestRendererJSON
    const json5 = rest5.toJSON() as ReactTestRendererJSON
    const json6 = rest6.toJSON() as ReactTestRendererJSON

    const className1 = json1.props.className
    const className2 = json2.props.className
    const className3 = json3.props.className
    const className4 = json4.props.className

    expect(json5.props.style.color).toEqual('#fff')
    expect(json6.props.style.color).toEqual('#fff')

    expect(className1).toContain('el-tag--success')
    expect(className2).toContain('el-tag-magenta')
    expect(className3).toContain('el-tag--plain')
    expect(className4).toContain('el-tag-has-color')
  })
})
