import type { FC, ReactNode } from 'react'
import React from 'react'
import classNames from 'classnames'
import { RowContext } from '../row'
import '../../../theme/src/col.scss'

interface ResponsiveType {
  span?: number
  offset?: number
  pull?: number
  push?: number
}

interface ColType extends ResponsiveType {
  tag?: string
  xs?: number | ResponsiveType
  sm?: number | ResponsiveType
  md?: number | ResponsiveType
  lg?: number | ResponsiveType
  xl?: number | ResponsiveType
}

// 响应式枚举
enum ResponsiveEnum {
  'span' = 'span',
  'offset' = 'offset',
  'pull' = 'pull',
  'push' = 'push',
}

// 尺寸大小的枚举
enum MeasureEnum {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

export type responsiveType = ResponsiveEnum.span | ResponsiveEnum.offset | ResponsiveEnum.pull | ResponsiveEnum.push
// export type measureType = MeasureEnum.xs | MeasureEnum.sm | MeasureEnum.md | MeasureEnum.lg | MeasureEnum.xl
export interface ColProps extends ColType {
  className?: string
  children?: ReactNode
  style?: React.CSSProperties
}

export const Col: FC<ColProps> = (props) => {
  const { gutter } = React.useContext(RowContext)
  const {
    tag = 'div',
    span,
    style = {},
    children,
    className: partClassName,
    ...otherList
  } = props

  // 整合样式对象
  let rowStyle: React.CSSProperties = {}
  if (gutter) {
    const padding = `${gutter / 2}px`
    rowStyle = ({
      paddingLeft: padding,
      paddingRight: padding,
    })
  }

  // 整合class
  const classList: Array<string> = ['el-col']
  if (span)
    classList.push(`el-col-${span}`);

  [ResponsiveEnum.offset, ResponsiveEnum.pull, ResponsiveEnum.push].forEach((prop) => {
    const value = props[prop]
    if (value)
      classList.push(`el-col-${prop}-${value}`)
  });
  [MeasureEnum.xs, MeasureEnum.sm, MeasureEnum.md, MeasureEnum.lg, MeasureEnum.xl].forEach((size) => {
    const value = props[size]
    const typeName = typeof value
    switch (typeName) {
      case 'number':
        classList.push(`el-col-${size}-${value}`)
        break
      case 'object': {
        const result = value as ResponsiveType
        Object.keys(result).forEach((keyName) => {
          const prop = keyName as responsiveType
          if (prop === ResponsiveEnum.span) {
            classList.push(`el-col-${size}-${result[prop]}`)
            return
          }
          classList.push(`el-col-${size}-${prop}-${result[prop]}`)
        })
      }
    }
  })

  const className = classNames(partClassName, [...classList].join(' '))

  const ColComponent = React.createElement(
    tag,
    {
      name: 'el-col',
      className,
      style: { ...rowStyle, ...style },
      ...otherList,
    },
    children,
  )
  return ColComponent
}
