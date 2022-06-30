import React from 'react'
import classNames from 'classnames'
import '../../theme/src/link.scss'

interface LinkProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  children?: React.ReactNode
  disabled?: boolean
  href?: string
  underline?: boolean | undefined
}

export default function Link(props: LinkProps) {
  const { type, disabled, underline } = props
  const prefix = 'el-link'
  const classes = classNames(
    prefix,
    {
      [`${prefix}--${type}`]: type,
      'is-disabled': disabled,
      'is-underline': underline !== false,
    },
  )

  return <a href={props.href ? props.href : 'javascript:;'}
    className={classes} >
    { props.children }
  </a>
}
