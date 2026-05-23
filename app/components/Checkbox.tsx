import React from 'react'
import './styles.css'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: React.ReactNode }

const Checkbox = React.forwardRef<HTMLInputElement, Props>(function Checkbox(props, ref) {
  const { className = '', label, ...rest } = props
  return (
    <label className="form-checkbox">
      <input ref={ref} type="checkbox" className={`form-checkbox-input ${className}`} {...rest} />
      {label}
    </label>
  )
})

export default Checkbox
