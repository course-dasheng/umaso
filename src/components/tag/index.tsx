import * as React from 'react'
import type { MouseEvent, MouseEventHandler, ReactNode } from 'react'
// import classnames from 'classnames'

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
  style?: React.CSSProperties
  onClose?: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, visible: boolean) => void
  onClick?: MouseEventHandler
}

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = ({
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
  style,
}, ref): JSX.Element => {
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
  function getTagStyle(color: string, style: React.CSSProperties | undefined) {
    if (color && style) {
      return {
        backgroundColor: color,
        ...style,
      }
    }
    else if (color) {
      return {
        backgroundColor: color,
      }
    }
    else if (style) {
      return style
    }
  }

  const [originClass, setOriginClass] = React.useState(['el-tag'])
  const [visibleClass, setVisClass] = React.useState('')
  const [bgColor, setBgColor] = React.useState('')

  // console.log(visible)

  React.useEffect(() => {
    setVisClass(getVisibleClass(visible))
    setOriginClass([...originClass, className || ''].filter(it => it !== ''))
    if (color) {
      const tmpClass = getColorClass(color)
      if (tmpClass === 'el-tag-has-color')
        setBgColor(color)
    }
  }, [visible, color, size, effect, type])

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
          className="el-tag-close-icon el-tag__close"
        >×</span>
      }
    }
    else {
      return ''
    }
  }

  const classList = [
    visibleClass,
    getColorClass(color),
    size ? `el-tag--${size}` : '',
    effect ? `el-tag--${effect}` : '',
    type ? `el-tag--${type}` : '',
    ...originClass,
  ].filter(it => it).join(' ')
  const closeContent = getCloseContent()

  // console.log(effectClass)

  return (
    <span ref={ref} className={classList} style={getTagStyle(bgColor, style)} onClick={onClick}>
      {icon}{children}{closeContent}
    </span>
  )
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(InternalTag)
export default Tag
