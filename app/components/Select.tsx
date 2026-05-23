import React from 'react'
import './styles.css'

type Props = React.SelectHTMLAttributes<HTMLSelectElement>

const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(props, ref) {
  const { className = '', children, ...rest } = props
  return (
    <select ref={ref} className={`form-select ${className}`} {...rest}>
      {children}
    </select>
  )
})

export default Select
