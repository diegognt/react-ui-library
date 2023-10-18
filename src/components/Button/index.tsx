import React from 'react';
import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  size?: "small" | "medium" | "large" | "full-width"
  color?: "primary" | "secondary"
  variant?: "solid" | "ghost" | "outline"
}

const Button = (props: ButtonProps): React.ReactNode => {
  const { label, size = "medium", color = "primary", variant = "solid" } = props

  if (!label) throw new Error("Button must have a label")

  return (
    <button
      className={`button button--${size} button--${color} button--${variant}`}
    >
      {label}
    </button>
  )
}

export default Button
