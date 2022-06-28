import React from 'react'
import classNames from 'classnames'
import '../../theme/src/card.scss'

interface CardProps {
  header?: React.ReactNode | string
  bodyStyle?: Object
  shadow?: 'always' | 'hover' | 'never'
  children?: React.ReactNode
  className?: string
}

const ElCard = (props: CardProps) => {
  const prefix = 'el-card'
  const { children, header, bodyStyle = { padding: '20px' }, shadow } = props
  const classes = classNames(
    prefix,
    {
      [`is-${shadow}-shadow`]: shadow,
    },
  )

  return (
    <div className={classes}>
      {header && <div className="el-card__header">{header}</div>}
      <div className="el-card__body" style={bodyStyle}>{children}</div>
    </div>
  )
}

export { ElCard }
export default ElCard
