import * as React from 'react'
import type { ReactNode } from 'react'
// import classnames from 'classnames'

import '../../theme/src/tag.scss'

type AlignType = 'start' | 'end' | 'center' | 'baseline'
type DirectionType = 'vertical' | 'horizontal'
type SizeType = 'small' | 'middle' | 'large'

interface SpaceProps {
  className?: string
  children?: string | ReactNode
  align?: AlignType
  direction?: DirectionType
  size?: SizeType | number
  split?: ReactNode
  wrap: boolean
}

const getGap = (size: SizeType | number) => {
  if (typeof size === 'string') {
    // 8 16 24px
  }
  else if (typeof size === 'number') {
    return `${size}px`
  }
}

const InternalSpace: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = ({
  // className,
  // children,
  // align,
  // direction = 'horizontal',
  size = 'small',
  // split,
  // wrap = false,
  // ...props
},
  // ref
): JSX.Element => {
// gap: 8px small
// align-items: center
// display: inline-block
  return (
    <div style={{ gap: getGap(size) }}>

    </div>
  )
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(InternalSpace)
export default Space
