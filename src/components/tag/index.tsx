import React, { useEffect, useState } from 'react'
import type { MouseEvent, MouseEventHandler, ReactNode } from 'react'

import '../../theme/src/tag.scss'

type SizeType = 'medium' | 'small' | 'mini'
type EffectType = 'dark' | 'light' | 'plain'

interface TagProps {
  className?: string
  children?: string | ReactNode
  closeable?: boolean
  closeIcon?: ReactNode
  type?: string
  color?: string
  icon?: ReactNode
  visible?: boolean
  size?: SizeType | number
  effect?: EffectType
  onClose?: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, visible: boolean) => void
  onClick?: MouseEventHandler
}

const colorKeys = ['red', 'green', 'blue', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']

function getColorClass(color: string | undefined) {
  let colorClassName: string
  if (color) {
    if (colorKeys.includes(color))
      colorClassName = `el-tag-${color}`
    else
      colorClassName = 'el-tag-has-color'

    return colorClassName
  }
  return ''
}

function getVisibleClass(visible: boolean | undefined) {
  return visible ? '' : 'el-tag-hidden'
}
function getTagStyle(color: string) {
  if (color) {
    return {
      backgroundColor: color,
    }
  }
}

export default function Tag(props: TagProps): JSX.Element {
  const {
    className,
    children,
    closeable,
    closeIcon,
    type,
    color,
    icon,
    visible,
    size = 'medium',
    effect = 'light',
    onClose,
    onClick,
  } = props

  const [originClass, setOriginClass] = useState(['el-tag'])
  const [visibleClass, setVisClass] = useState('')
  const [colorClass, setColorClass] = useState('')
  const [bgColor, setBgColor] = useState('')
  const [sizeClass, setSizeClass] = useState('')
  const [effectClass, setEftClass] = useState('')
  const [typeClass, setTypeClass] = useState('')

  // console.log(visible)

  useEffect(() => {
    setVisClass(getVisibleClass(visible))
    setSizeClass(`el-tag--${size}`)
    setEftClass(`el-tag--${effect}`)
    setOriginClass([...originClass, className || ''].filter(it => it !== ''))
    type && setTypeClass(`el-tag--${type}`)
    if (color) {
      const tmpClass = getColorClass(color)
      setColorClass(tmpClass)
      if (tmpClass === 'el-tag-has-color')
        setBgColor(color)
    }
  }, [visible, color])

  function handleClose(e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, visible: boolean) {
    onClose && onClose(e, visible)
    setVisClass('el-tag-hidden')
  }

  function getCloseContent() {
    if (closeable) {
      if (closeIcon) {
        return closeIcon
      }
      else {
        return <span
          role="img"
          aria-label="close"
          tabIndex={-1}
          onClick={e => handleClose(e, visible || false)}
          className="el-icon el-icon-close el-tag-close-icon el-tag__close"
        >×</span>
      }
    }
    else {
      return ''
    }
  }

  const classList = [
    visibleClass,
    colorClass,
    sizeClass,
    effectClass,
    typeClass,
    ...originClass,
  ].filter(it => it).join(' ')
  const closeContent = getCloseContent()

  return (
    <span className={classList} style={getTagStyle(bgColor)} onClick={onClick}>
      {[icon, children, closeContent]}
    </span>
  )
}
