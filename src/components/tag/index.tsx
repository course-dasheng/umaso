import React, { useEffect, useState } from 'react'
import type { Component, MouseEventHandler, ReactNode } from 'react'

import '../../theme/src/tag.scss'

type SizeType = 'medium' | 'small' | 'mini'
type EffectType = 'dark' | 'light' | 'plain'

interface TagProps {
  children?: string | Component
  closeable?: boolean
  closeIcon?: ReactNode
  type?: string
  color?: string
  icon: ReactNode
  visible?: boolean
  size?: SizeType | number
  effect?: EffectType
  onClose: MouseEventHandler
  onClick: MouseEventHandler
}

export default function Tag(props: TagProps) {
  const {
    // children,
    closeable,
    // closeIcon,
    // type,
    // color,
    // icon,
    visible,
    // size,
    // effect,
    onClose,
    onClick,
  } = props

  const [className, setClassName] = useState(['el-tag'])

  // console.log(visible)

  useEffect(() => {
    !visible && setClassName(className => ([...className, 'el-tag-hidden'])) // display:none
  }, [visible])

  function handleClose(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    onClose(e)
    setClassName([...className, 'el-tag-hidden'])
  }

  return (
    <span className={className.join(' ')} onClick={onClick}>
      {
        closeable
        && <span
          role="img"
          aria-label="close"
          tabIndex={-1}
          onClick={handleClose}
          className="el-icon el-icon-close el-tag-close-icon"
        >close</span> }
      {props.children}
    </span>
  )
}
