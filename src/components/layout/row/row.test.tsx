import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Row as ElRow, RowContext } from './index'

describe('Row.react', () => {
  it('Row snapshot', () => {
    const component = renderer.create(<ElRow></ElRow>)
    expect(component).toMatchSnapshot()
  })
  describe('Row class', () => {
    it('render and contain has class .el-row', () => {
      const component = renderer.create(
        <ElRow></ElRow>,
      )
      const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
      expect(type).toBe('div')
      expect(name).toBe('el-row')
      expect(className).toBe('el-row')
    })
    it('contain has class .el-row--flex', () => {
      const component = renderer.create(
        <ElRow type="flex"></ElRow>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('el-row--flex')
    })
    it('contain has class .is-justify-end', () => {
      const component = renderer.create(
        <ElRow justify="end"></ElRow>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('is-justify-end')
    })
    it('contain has class .is-align-bottom', () => {
      const component = renderer.create(
        <ElRow align="bottom"></ElRow>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('is-align-bottom')
    })
  })

  it('Row gutter style', () => {
    const count = 10
    const gutter = count * 2
    const component = renderer.create(
      <ElRow gutter={gutter}></ElRow>,
    )
    const { props: { style } } = component.toJSON() as ReactTestRendererJSON
    expect(style).toEqual({
      marginLeft: `-${count}px`,
      marginRight: `-${count}px`,
    })
  })
})
