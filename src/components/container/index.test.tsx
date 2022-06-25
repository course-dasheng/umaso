import React from 'react'
import type { ReactTestRendererJSON } from 'react-test-renderer'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from './index'

describe('ElHeader.react', () => {
  it('Header snapshot', () => {
    const component = renderer.create(<ElHeader></ElHeader>)
    expect(component).toMatchSnapshot()
  })
  it('Header render', () => {
    const component = renderer.create(
      <ElHeader></ElHeader>,
    )
    const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
    expect(type).toBe('header')
    expect(className).toBe('el-header')
    expect(name).toBe('el-header')
  })
  it('Header chldren', () => {
    const text = 'hello world'
    const component = renderer.create(<ElHeader>{text}</ElHeader>)
    const { children } = component.toJSON() as ReactTestRendererJSON
    expect(children).toContain(text)
  })
  it('Header style', () => {
    const component = renderer.create(<ElHeader height="90px"></ElHeader>)
    const { props: { style } } = component.toJSON() as ReactTestRendererJSON
    expect(style).toEqual({ height: '90px' })
  })
})

describe('ElAside.react', () => {
  it('Aside snapshot', () => {
    const component = renderer.create(<ElAside></ElAside>)
    expect(component).toMatchSnapshot()
  })
  it('Aside render', () => {
    const component = renderer.create(
      <ElAside></ElAside>,
    )
    const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
    expect(type).toBe('aside')
    expect(className).toBe('el-aside')
    expect(name).toBe('el-aside')
  })
  it('Aside chldren', () => {
    const text = 'hello world'
    const component = renderer.create(<ElAside>{text}</ElAside>)
    const { children } = component.toJSON() as ReactTestRendererJSON
    expect(children).toContain(text)
  })
  it('Aside style', () => {
    const component = renderer.create(<ElAside width="250px"></ElAside>)
    const { props: { style } } = component.toJSON() as ReactTestRendererJSON
    expect(style).toEqual({ width: '250px' })
  })
})

describe('ElMain.react', () => {
  it('Main snapshot', () => {
    const component = renderer.create(<ElMain></ElMain>)
    expect(component).toMatchSnapshot()
  })
  it('Main render', () => {
    const component = renderer.create(<ElMain></ElMain>)
    const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
    expect(type).toBe('main')
    expect(className).toBe('el-main')
    expect(name).toBe('el-main')
  })
  it('Main children', () => {
    const text = 'hello world'
    const component = renderer.create(<ElMain>{text}</ElMain>)
    const { children } = component.toJSON() as ReactTestRendererJSON
    expect(children).toContain(text)
  })
})

describe('ElFooter.react', () => {
  it('Footer snapshot', () => {
    const component = renderer.create(<ElFooter></ElFooter>)
    expect(component).toMatchSnapshot()
  })
  it('Footer render', () => {
    const component = renderer.create(
      <ElFooter></ElFooter>,
    )
    const { type, props: { className, name } } = component.toJSON() as ReactTestRendererJSON
    expect(type).toBe('footer')
    expect(className).toBe('el-footer')
    expect(name).toBe('el-footer')
  })
  it('Footer chldren', () => {
    const text = 'hello world'
    const component = renderer.create(<ElFooter>{text}</ElFooter>)
    const { children } = component.toJSON() as ReactTestRendererJSON
    expect(children).toContain(text)
  })
  it('Footer style', () => {
    const component = renderer.create(<ElFooter height="90px"></ElFooter>)
    const { props: { style } } = component.toJSON() as ReactTestRendererJSON
    expect(style).toEqual({ height: '90px' })
  })
})

describe('ElContainer.react', () => {
  it ('Container snapshot', () => {
    const component = renderer.create(<ElContainer></ElContainer>)
    expect(component).toMatchSnapshot()
  })

  describe('Container class', () => {
    it('Container has class el-container', () => {
      const component = renderer.create(<ElContainer></ElContainer>)
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toBe(className)
    })
    it('Container has class is-vertical by prop direction=vertical', () => {
      const component = renderer.create(<ElContainer direction="vertical"></ElContainer>)
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('is-vertical')
    })
    it('Container has class is-vertical by prop direction=horizontal', () => {
      const component = renderer.create(<ElContainer direction="horizontal"></ElContainer>)
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className.includes('is-vertical')).toBeFalsy()
      expect(className.includes('el-container')).toBeTruthy()
    })
  })

  describe('Container children', () => {
    it('chldren has el-header', () => {
      const component = renderer.create(
        <ElContainer>
          <ElHeader></ElHeader>
          <ElMain>
            <ElAside>aside</ElAside>
          </ElMain>
        </ElContainer>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('is-vertical')
    })
    it('chldren has el-footer', () => {
      const component = renderer.create(
        <ElContainer>
          <ElMain>
            <ElAside>aside</ElAside>
          </ElMain>
          <ElFooter></ElFooter>
        </ElContainer>,
      )
      const { props: { className } } = component.toJSON() as ReactTestRendererJSON
      expect(className).toContain('is-vertical')
    })
  })
})
