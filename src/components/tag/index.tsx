import React from 'react'
import type { MouseEventHandler, ReactNode } from 'react'

import '../../theme/src/tag.scss'

type SizeType = 'medium' | 'small' | 'mini'
type EffectType = 'dark' | 'light' | 'plain'

interface TagProps {
  closable?: boolean
  closeIcon?: ReactNode
  type?: string
  color?: string
  icon: ReactNode
  visible?: boolean
  size?: SizeType | number
  effect?: EffectType
  onClose: (e: Event) => void
  onClick: MouseEventHandler
}

export default function Tag(props: TagProps) {
  function useClassName() {
    const className: string[] = ['umaso-tag']
    return className.join(' ')
  }
  const classList = useClassName()
  return (
    <span className={classList} onClick={props.onClick}>
    </span>
  )
}
