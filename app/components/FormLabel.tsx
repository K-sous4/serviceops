import React from 'react'
import './styles.css'

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }

export default function FormLabel({ children, required, className = '', ...props }: Props) {
  return (
    <label className={`form-label ${className}`} {...props}>
      {children}{required ? ' *' : ''}
    </label>
  )
}
