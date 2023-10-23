import React from "react"

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: string,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  size?: "xs" | "sm" | "md" | "lg" | "xlg" | "2xlg" | "3xlg",
}

const Heading = (props: HeaderProps): JSX.Element => {
  const { children, as = "h1", size = "md", ...rest } = props

  if (!children) throw new Error("Heading must have children")

  const Component = as

  return (
    <Component className={`heading heading--${size}`} {...rest}>
      {children}
    </Component>
  )
}

export default Heading
