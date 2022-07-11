import type { FC, ReactNode } from 'react'
import React, { createContext } from 'react'

import classNames from 'classnames'
import '../../../theme/src/row.scss'

interface RowType {
  tag?: string
  gutter?: number
  type?: string
  justify?: justifyType | string
  align?: alignType | string
}

enum AlignEnum {
  'top' = 'top',
  'middle' = 'middle',
  'bottom' = 'bottom',
  'stretch' = 'stretch',
}

enum JustifyEnum {
  'start' = 'start',
  'end' = 'end',
  'center' = 'center',
  'spaceAround' = 'space-around',
  'spaceBetween' = 'space-between',
  'spaceEvenly' = 'space-evenly',
}

export type alignType = AlignEnum.top | AlignEnum.middle | AlignEnum.bottom | AlignEnum.stretch
export type justifyType = JustifyEnum.start | JustifyEnum.end | JustifyEnum.center | JustifyEnum.spaceAround | JustifyEnum.spaceBetween | JustifyEnum.spaceEvenly
export interface RowProps extends RowType {
  className?: string
  children?: ReactNode
  style?: React.CSSProperties
}

export const RowContext = createContext({})

export const Row: FC<RowProps> = (props) => {
  const {
    tag = 'div',
    type: typeName,
    align = AlignEnum.top,
    style = {},
    gutter = 0,
    justify = JustifyEnum.start,
    children,
    className: partClassName,
    ...otherList
  } = props

  // 整合样式对象
  let rowStyle: React.CSSProperties = {}
  if (gutter) {
    const margin = `-${gutter / 2}px`
    rowStyle = ({
      marginLeft: margin,
      marginRight: margin,
    })
  }

  // 整合class对象
  const classList: Array<string> = ['el-row']
  if (justify !== 'start')
    classList.push(`is-justify-${justify}`)

  if (align !== 'top')
    classList.push(`is-align-${align}`)

  if (typeName === 'flex')
    classList.push('el-row--flex')

  const className = classNames(partClassName, [...classList].join(' '))
  const rowContext = React.useMemo(() => gutter, [gutter])
  const RowComponent = React.createElement(RowContext.Provider, { value: rowContext },
    React.createElement(
      tag,
      {
        name: 'el-row',
        className,
        style: { ...rowStyle, ...style },
        ...otherList,
      },
      children,
    ))

  return RowComponent
}
