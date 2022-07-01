import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Link from './index'

interface LinkAttr {
  content: string
  href?: string
  disabled?: boolean
  underline?: boolean
}

const attr: LinkAttr = {
  content: '链接文案',
  href: 'https://baidu.com',
  disabled: true,
  underline: true,
}

describe('test link component', () => {
  it('link type', () => {
    const comp = renderer.create(<Link type="primary"> link component</Link>)

    const { type, props } = comp.toJSON() as ReactTestRendererJSON
    expect(type).toBe('a')
    expect(props.className).toContain('el-link--primary')
  })

  it('test link disable', () => {
    const comp = renderer.create(<Link disabled={attr.disabled}>link disabled</Link>)
    const { props } = comp.toJSON() as ReactTestRendererJSON
    expect(props.className).toContain('is-disabled')
  })

  it('test link underline', () => {
    const comp = renderer.create(<Link underline={attr.underline}>link underline</Link>)
    const { props } = comp.toJSON() as ReactTestRendererJSON
    expect(props.className).toContain('is-underline')
  })
  it('test link underline', () => {
    const comp = renderer.create(<Link underline={false}>link underline</Link>)
    const { props } = comp.toJSON() as ReactTestRendererJSON
    expect(props.className).not.toContain('is-underline')
  })

  it('test href props', () => {
    const url = "https://github.com/course-dasheng/umaso"
    const comp = renderer.create(<Link href={url}>link underline</Link>)
    const { props } = comp.toJSON() as ReactTestRendererJSON
    expect(props.href).toEqual(url)
  })


  it('test link slot', () => {
    function Content(props: { desc: string }) {
      return <span>this is content, {props.desc}</span>
    }

    render(
    <Link type="primary">
        <Content desc="children component" />
    </Link>)

    expect(screen.getByText(/children component/i)).toBeInTheDocument()
  })
})

