import React from 'react'
import './styles.css'

type Props = {
  id?: string
  label?: React.ReactNode
  hint?: React.ReactNode
  error?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function FormField({ id, label, hint, error, children, className = '' }: Props) {
  return (
    <div className={`form-field ${className}`} data-has-error={!!error}>
      {label}
      {children}
      {error ? <div className="form-error">{error}</div> : hint ? <div className="form-hint">{hint}</div> : null}
    </div>
  )
}
