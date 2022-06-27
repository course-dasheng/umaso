import type { ReactTestRendererJSON } from 'react-test-renderer'
import { describe, it } from 'vitest'
import * as React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Tag from './index'

describe('测试标签', () => {
  it('render Tag ', () => {
    const rest = renderer.create(<Tag>测试</Tag>)
    expect(rest).toMatchSnapshot()
  })
  it('Tag visible and closeable', () => {
    const onClose = () => {}
    const wrapper = render(<Tag visible={true} closeable={true} onClose={onClose} >测试</Tag>)
    expect(wrapper)

    const rest = renderer.create(<Tag visible={false} closeable={true} onClose={onClose} >测试</Tag>)
    const { props: { className } } = rest.toJSON() as ReactTestRendererJSON

    const instanceRoot = rest.root
    const closeIcon = instanceRoot.findByProps({ className: 'el-icon el-icon-close el-tag-close-icon el-tag__close' })

    expect(className).toContain('el-tag-hidden')
    expect(closeIcon)
  })
  it('Tag type and color and effect', () => {
    const rest1 = renderer.create(<Tag type="success">test type</Tag>)
    const rest2 = renderer.create(<Tag color="magenta">test color</Tag>)
    const rest3 = renderer.create(<Tag effect="plain" >test color</Tag>)
    const json1 = rest1.toJSON() as ReactTestRendererJSON
    const json2 = rest2.toJSON() as ReactTestRendererJSON
    const json3 = rest3.toJSON() as ReactTestRendererJSON

    const className1 = json1.props.className
    const className2 = json2.props.className
    const className3 = json3.props.className

    expect(className1).toContain('el-tag--success')
    expect(className2).toContain('el-tag-magenta')
    expect(className3).toContain('el-tag--plain')
  })
})
