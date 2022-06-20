import React from 'react'
import classNames from 'classnames'
import '../../theme/src/button.scss'

// type ButtonType =

interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const { type } = props
  const prefix = 'el-button'
  const classes = classNames(
    prefix,
    {
      [`${prefix}--${type}`]: type,
    },
  )

  return <button className={classes}>
    {props.children}
  </button>
}

