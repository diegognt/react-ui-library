import React from "react"

import "./styles.css"

export type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: string,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl",
}

const Heading = (props: HeaderProps): JSX.Element => {
  const { children, as = "h1", size = "3xl", ...rest } = props

  if (!children) throw new Error("Heading must have children")

  const Component = as

  return (
    <Component className={`heading heading--${size}`} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
