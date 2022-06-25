import type { FC, ReactNode } from 'react'
import React from 'react'
import classNames from 'classnames'
import '../../theme/src/header.scss'
import '../../theme/src/aside.scss'
import '../../theme/src/main.scss'
import '../../theme/src/footer.scss'
import '../../theme/src/container.scss'

enum DirectionEnum {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export interface ContainerProps {
  className?: string
  children?: ReactNode
  direction?: DirectionEnum.horizontal | DirectionEnum.vertical | string
  width?: string
  height?: string
}

enum TypeEnum {
  header = 'el-header',
  aside = 'el-aside',
  main = 'el-main',
  footer = 'el-footer',
  container = 'el-container',
}

export type TagType = TypeEnum.header | TypeEnum.aside | TypeEnum.main | TypeEnum.footer | TypeEnum.container
export interface ContainerPropsWithTypeName extends ContainerProps {
  typeName: TagType
  tagName: string
}

const SubContainer: FC<ContainerPropsWithTypeName> = (props) => {
  const { className: oldClassName, children, tagName, typeName, ...otherList } = props
  const className = classNames(typeName, oldClassName)
  return React.createElement(
    tagName,
    {
      className,
      ...otherList,
      name: typeName,
    },
    children,
  )
}

const Container: FC<ContainerPropsWithTypeName> = (props) => {
  const { className: oldClassName, children, tagName, direction, typeName, ...otherList } = props
  const list = Array.isArray(children) ? children : [children]
  const isVertical = list?.some((item: React.ReactComponentElement<any>) => {
    if (item && item.type) {
      const { props: { typeName } } = item.type(item.props)
      return ['el-header', 'el-footer'].includes(typeName)
    }
    return false
  })

  let className = ''
  if (isVertical || direction === DirectionEnum.vertical)
    className = classNames(typeName, oldClassName, 'is-vertical')
  else
    className = classNames(typeName, oldClassName)

  return React.createElement(
    tagName,
    {
      className,
      ...otherList,
      name: typeName,
    },
    children,
  )
}

function generateComponent(tagName: string, typeName: TypeEnum) {
  switch (typeName) {
    case TypeEnum.header:
    case TypeEnum.footer: {
      return (MyComponent: any) => {
        const Adapter: FC<ContainerProps> = (props) => {
          const { height = '60px', ...otherList } = props
          const newPorps = {
            ...otherList,
            style: { height },
            tagName,
            typeName,
          }
          return <MyComponent {...newPorps} />
        }
        return Adapter
      }
    }
    case TypeEnum.aside: {
      return (MyComponent: any) => {
        const Adapter: FC<ContainerProps> = (props) => {
          const { width = '300px', ...otherList } = props
          const newPorps = {
            ...otherList,
            style: { width },
            tagName,
            typeName,
          }
          return <MyComponent {...newPorps} />
        }
        return Adapter
      }
    }
    case TypeEnum.main: {
      return (MyComponent: any) => {
        const Adapter: FC<ContainerProps> = (props) => {
          const newPorps = {
            ...props,
            typeName,
            tagName,
          }
          return <MyComponent {...newPorps} />
        }
        return Adapter
      }
    }
    case TypeEnum.container: {
      return (MyComponent: any) => {
        const Adapter: FC<ContainerProps> = (props) => {
          const { direction = DirectionEnum.horizontal, ...otherList } = props
          const newPorps = {
            ...otherList,
            typeName,
            tagName,
            direction,
          }
          return <MyComponent {...newPorps} />
        }
        return Adapter
      }
    }
  }
}

const ElContainer = generateComponent('section', TypeEnum.container)(Container)
const ElHeader = generateComponent('header', TypeEnum.header)(SubContainer)
const ElAside = generateComponent('aside', TypeEnum.aside)(SubContainer)
const ElMain = generateComponent('main', TypeEnum.main)(SubContainer)
const ElFooter = generateComponent('footer', TypeEnum.footer)(SubContainer)

export { ElHeader, ElAside, ElMain, ElFooter, ElContainer }
export default ElContainer
