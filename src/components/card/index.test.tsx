import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import ElCard from './index'

describe('ElCard.react', () => {
  it('Card snapshot', () => {
    const component = renderer.create(<ElCard></ElCard>)
    expect(component).toMatchSnapshot()
  })

  it('Card className', () => {
    const component = renderer.create(<ElCard></ElCard>)
    const {
      props: { className },
    } = component.toJSON() as ReactTestRendererJSON
    expect(className).toBe('el-card')
  })

  it('Card children', () => {
    const childrenText = 'children test'
    const component = renderer.create(<ElCard>{childrenText}</ElCard>)
    const componentInstance = component.root
    expect(
      componentInstance.findByProps({ className: 'el-card__body' }).children,
    ).toContain(childrenText)
  })

  it('Card bodyStyle', () => {
    const style = { pdding: '1px' }
    const component = renderer.create(<ElCard bodyStyle={style}></ElCard>)
    const componentInstance = component.root
    expect(
      componentInstance.findByProps({ className: 'el-card__body' }).props.style,
    ).toContain(style)
  })

  it('Card shadow', () => {
    const component = renderer.create(
      <ElCard
        // ! 这里为什么会报错？错误信息如下
        // Type '"hover"' is not assignable to type 'TypeShadow | undefined'.ts(2322)
        // index.tsx(14, 3): The expected type comes from property 'shadow' which is declared here on type 'IntrinsicAttributes & CardProps'
        shadow="hover"
      ></ElCard>,
    )
    const {
      props: { className },
    } = component.toJSON() as ReactTestRendererJSON
    expect(className).toContain('is-hover-shadow')
  })
})