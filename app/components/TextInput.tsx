import React from 'react'
import './styles.css'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = React.forwardRef<HTMLInputElement, Props>(function TextInput(props, ref) {
  const { className = '', type = 'text', ...rest } = props
  return <input ref={ref} type={type} className={`form-input ${className}`} {...rest} />
})

export default TextInput
