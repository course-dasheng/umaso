import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import { Row as ElRow } from '../row'
import { Col as ElCol } from './index'

describe('Col.react', () => {
  it('Col snapshot', () => {
    const component = renderer.create(<ElCol></ElCol>)
    expect(component).toMatchSnapshot()
  })
  describe('Col class', () => {
    it ('contain has class .el-col', () => {
      const component = renderer.create(
        <ElCol></ElCol>,
      )
      const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
      expect(type).toBe('div')
      expect(name).toBe('el-col')
      expect(className).toBe('el-col')
    })
    it('contain has class .el-col-{num}', () => {
      const num = 12
      const component = renderer.create(
        <ElCol span={num}></ElCol>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain(`el-col-${num}`)
    })
    it('contain has class .el-col-offset-{num}', () => {
      const num = 8
      const component = renderer.create(
        <ElCol offset={num}></ElCol>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain(`el-col-offset-${num}`)
    })
    it('contain has class .el-col-pull-{num}', () => {
      const num = 6
      const component = renderer.create(
        <ElCol pull={num}></ElCol>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain(`el-col-pull-${num}`)
    })
    it('contain has class .el-col-push-{num}', () => {
      const num = 4
      const component = renderer.create(
        <ElCol push={num}></ElCol>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain(`el-col-push-${num}`)
    })
  })

  it('Col gutter style', () => {
    const count = 10
    const gutter = count * 2
    const component = renderer.create(
      <ElRow gutter={gutter}>
        <ElCol></ElCol>
      </ElRow>,
    )
    const componentInstance = component.root
    const { props: { name, style } } = componentInstance.findByProps({ className: 'el-col' })
    expect(name).toBe('el-col')
    expect(style).toEqual({
      paddingLeft: `${count}px`,
      paddingRight: `${count}px`,
    })
  })

  it('The responsive', () => {
    const component = renderer.create(
      <ElRow gutter={22}>
        <ElCol
          xs={{ span: 22, offset: 2 }}
          sm={{ span: 18, offset: 4 }}
          md={22}
          lg={{ span: 20, offset: 2 }}
          xl={18}
        >
          hello world
        </ElCol>
      </ElRow>,
    )
    const componentInstance = component.root
    const { props: { className, style } } = componentInstance.find(node => node.props.name === 'el-col')
    expect(className).toContain('el-col')
    expect(style).toEqual({
      paddingLeft: '11px',
      paddingRight: '11px',
    })
    expect(className).toContain('el-col-xs-22')
    expect(className).toContain('el-col-xs-offset-2')
    expect(className).toContain('el-col-sm-18')
    expect(className).toContain('el-col-sm-offset-4')
    expect(className).toContain('el-col-md-22')
    expect(className).toContain('el-col-lg-20')
    expect(className).toContain('el-col-lg-offset-2')
    expect(className).toContain('el-col-xl-18')
  })
})
