
type ButtonProps = {
  label: string
  size?: "small" | "medium" | "large" | "full-width"
  color?: "primary" | "secondary"
  variant?: "solid" | "ghost" | "outline"
}

const Button = (props: ButtonProps) => {
  const { label, size = "medium", color = "primary", variant = "solid" } = props

  return (
    <button
      className={`button button--${size} button--${color} button--${variant}`}
    >
      {label}
    </button>
  )
}

export default Button
