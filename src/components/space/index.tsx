import * as React from 'react'
import type { ReactNode } from 'react'
import classnames from 'classnames'

import '../../theme/src/space.scss'

type AlignType = 'start' | 'end' | 'center' | 'baseline'
type DirectionType = 'vertical' | 'horizontal'
type SizeType = 'small' | 'middle' | 'large'

interface SpaceProps {
  className?: string
  children?: string | ReactNode | ReactNode[]
  align?: AlignType
  direction?: DirectionType
  size?: SizeType | number
  split?: ReactNode
  wrap?: boolean
}
const sizeDict = {
  small: '8px',
  middle: '16px',
  large: '24px',
}
const getGap = (size: SizeType | number) => {
  if (typeof size === 'string') {
    // 8px 16px 24px
    return sizeDict[size]
  }
  else if (typeof size === 'number') {
    return `${size}px`
  }
}

const getContent = (children: string | ReactNode | ReactNode[], split: ReactNode) => {
  if (children && split && Array.isArray(children)) {
    const newChildren: ReactNode[] = []
    for (let index = 0; index < children.length; index++) {
      const element = children[index]
      newChildren.push(element)
      if (index < children.length - 1)
        newChildren.push(split)
    }
    return newChildren
  }
  return children
}

const InternalSpace: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = ({
  className,
  children,
  align,
  direction = 'horizontal',
  size = 'small',
  split,
  wrap = false,
  ...props
},
ref,
): JSX.Element => {
  const spaceClass = classnames(
    'el-space',
    `el-space--${direction}`,
    align
      ? `el-space--align-${align}`
      : 'el-space--align-start',
    className,
  )

  return (
    <div ref={ref} {...props} className={spaceClass} style={{ gap: getGap(size), flexWrap: wrap ? 'wrap' : 'nowrap' }}>
      {getContent(children, split)}
    </div>
  )
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(InternalSpace)
export default Space
