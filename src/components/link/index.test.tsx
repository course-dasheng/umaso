import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Link from './index'

interface LinkAttr {
  content: string
  link?: string
  disabled?: boolean
}

const attr: LinkAttr = {
  content: '链接文案',
  link: 'https://baidu.com',
  disabled: true,
}

describe('测试链接组件', () => {
  it('link type', () => {
    const comp = renderer.create(<Link type="primary" link={attr.link}>{attr.content}</Link>)

    const { type, props } = comp.toJSON() as ReactTestRendererJSON
    expect(type).toBe('a')
    expect(props.className).toContain('el-link--primary')
  })

})

