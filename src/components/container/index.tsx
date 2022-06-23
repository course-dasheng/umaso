import type { ReactNode } from 'react'
import React, { forwardRef } from 'react'
import classNames from 'classnames'
import '../../theme/src/header.scss'
import '../../theme/src/aside.scss'
import '../../theme/src/main.scss'
import '../../theme/src/footer.scss'
import '../../theme/src/container.scss'

export enum DirectionEnum {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export interface ContainerProps {
  prefixClass: string
  className: string
  children: ReactNode
  direction?: DirectionEnum.horizontal | DirectionEnum.vertical
  width?: string
  height?: string
}

export enum TagEnum {
  header = 'el-header',
  aside = 'el-aside',
  main = 'el-main',
  footer = 'el-footer',
  container = 'el-container',
}

export type TagType = TagEnum.header | TagEnum.aside | TagEnum.main | TagEnum.footer | TagEnum.container
export interface ContainerPropsWithTagName extends ContainerProps {
  tagName: TagType
}

const SubContainer = forwardRef<HTMLElement, ContainerPropsWithTagName>((props, ref) => {
  const { prefixClass, className: oldClassName, children, tagName, ...otherList } = props
  const className = classNames(prefixClass, oldClassName)
  return React.createElement(
    tagName,
    {
      className,
      ...otherList,
      ref,
    },
    children,
  )
})

const Container = forwardRef<HTMLElement, ContainerPropsWithTagName>((props, ref) => {
  const { prefixClass, className: oldClassName, children, tagName, direction, ...otherList } = props
  const list = Array.isArray(children) ? children : [children]
  const isVertical = list.some(item => ['el-header', 'el-footer'].includes(item.name))

  let className = ''
  if (isVertical || direction === DirectionEnum.vertical)
    className = classNames(prefixClass, oldClassName, 'is-vertical')
  else
    className = classNames(prefixClass, oldClassName)

  return React.createElement(
    tagName,
    {
      className,
      ...otherList,
      ref,
    },
    children,
  )
})

function generateComponent(tagName: TagType) {
  /**
   * TODO
   * 1. 如果是header footer 组件，就给他设置height: 60px
   * 2. 如果是 aside 组件，就给他设置width：300px
   * 3. 如果是 container组件，就给他设置direction: horizontal
   */
  switch (tagName) {
    case TagEnum.header:
    case TagEnum.footer: {
      return (MyComponent: any) => {
        const Adapter = React.forwardRef<HTMLElement, ContainerProps>((props, ref) => {
          const { height = '60px', ...otherList } = props
          return <MyComponent ref={ref} styles={{ height }} {...otherList} />
        })
        return Adapter
      }
    }
    case TagEnum.aside: {
      return (MyComponent: any) => {
        const Adapter = React.forwardRef<HTMLElement, ContainerProps>((props, ref) => {
          const { width = '300px', ...otherList } = props
          return <MyComponent ref={ref} styles={{ width }} {...otherList} />
        })
        return Adapter
      }
    }
    case TagEnum.main: {
      return (MyComponent: any) => MyComponent
    }
    case TagEnum.container: {
      return (MyComponent: any) => {
        const Adapter = React.forwardRef<HTMLElement, ContainerProps>((props, ref) => {
          const { direction = DirectionEnum.horizontal, ...otherList } = props
          return <MyComponent ref={ref} { ...{ direction } } {...otherList} />
        })
        return Adapter
      }
    }
  }
}

const ElContainer = generateComponent(TagEnum.container)(Container)
const ElHeader = generateComponent(TagEnum.header)(SubContainer)
const ElAside = generateComponent(TagEnum.aside)(SubContainer)
const ElMain = generateComponent(TagEnum.main)(SubContainer)
const ElFooter = generateComponent(TagEnum.footer)(SubContainer)

export { ElHeader, ElAside, ElMain, ElFooter, ElContainer }
export default ElContainer
