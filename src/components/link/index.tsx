import React from 'react'
import classNames from 'classnames'
import '../../theme/src/link.scss'

interface LinkProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  children?: React.ReactNode
  disabled?: boolean
  link?: string
}

export default function Link(props: LinkProps) {
  const { type, disabled } = props
  const prefix = 'el-link'
  const classes = classNames(
    prefix,
    {
      [`${prefix}--${type}`]: type,
      'is-disabled': disabled,
    },
  )

  return <a href={props.link} className={classes}>
    { props.children }
  </a>
}
