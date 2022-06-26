import { describe, it } from 'vitest'
import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import Tag from './index'

describe('<Tag>测试</Tag>', () => {
  it('render Tag ', () => {
    const rest = renderer.create(<Tag>测试</Tag>)
    expect(rest).toMatchSnapshot()
  })
  it('Tag visible and closeable', () => {
    const rest = renderer.create(<Tag visible={false} closeable={true} >测试</Tag>)
    const { props: { className } } = rest.toJSON() as ReactTestRendererJSON

    const instanceRoot = rest.root
    expect(className).toContain('el-tag-hidden')
    expect(instanceRoot.findByProps({ className: 'el-icon el-icon-close el-tag-close-icon el-tag__close' }))
  })
  it('Tag type and color and effect', () => {
    const rest1 = renderer.create(<Tag type="success">测试</Tag>)
    const rest2 = renderer.create(<Tag color="magenta">测试</Tag>)
    const rest3 = renderer.create(<Tag effect="plain" >dark effect</Tag>)
    const json1 = rest1.toJSON() as ReactTestRendererJSON
    const json2 = rest2.toJSON() as ReactTestRendererJSON
    const json3 = rest3.toJSON() as ReactTestRendererJSON

    const className1 = json1.props.className
    const className2 = json2.props.className
    const className3 = json3.props.className
    // console.log('#####', rest3.toJSON())

    expect(className1).toContain('el-tag--success')
    expect(className2).toContain('el-tag-magenta')
    expect(className3).toContain('el-tag--plain')
  })
})
