import React from 'react';
import './styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  size?: "small" | "medium" | "large" | "full-width"
  color?: "primary" | "secondary"
  variant?: "solid" | "ghost" | "outline"
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children, size = "medium", color = "primary", variant = "solid", ...rest } = props

  if (!children) throw new Error("Button must have children")

  return (
    <button
      className={`button button--${size} button--${color} button--${variant}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
