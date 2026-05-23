import React from 'react'
import './styles.css'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(function TextArea(props, ref) {
  const { className = '', ...rest } = props
  return <textarea ref={ref} className={`form-textarea ${className}`} {...rest} />
})

export default TextArea
