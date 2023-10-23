import { expect, describe, test, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import Heading from "./"

describe("The Heading component", () => {
  afterEach(() => cleanup())

  test("renders a heading", () => {
    render(<Heading>UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toBeInTheDocument()
  })

  test("renders a heading with a 'h1' tag by default", () => {
    render(<Heading>UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H1")
  })

  test("renders a heading with a 'h2' tag", () => {
    render(<Heading as="h2">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H2")
  })

  test("renders a heading with a 'h3' tag", () => {
    render(<Heading as="h3">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H3")
  })

  test("renders a heading with a 'h4' tag", () => {
    render(<Heading as="h4">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H4")
  })

  test("renders a heading with a 'h5' tag", () => {
    render(<Heading as="h5">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H5")
  })

  test("renders a heading with a 'h6' tag", () => {
    render(<Heading as="h6">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading.tagName).toBe("H6")
  })

  test("renders a heading with a 'xs' size", () => {
    render(<Heading size="xs">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--xs")
  })

  test("renders a heading with a 'sm' size", () => {
    render(<Heading size="sm">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--sm")
  })

  test("renders a heading with a 'md' size", () => {
    render(<Heading size="md">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--md")
  })

  test("renders a heading with a 'lg' size", () => {
    render(<Heading size="lg">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--lg")
  })

  test("renders a heading with a 'xlg' size", () => {
    render(<Heading size="xlg">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--xlg")
  })

  test("renders a heading with a '2xlg' size", () => {
    render(<Heading size="2xlg">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--2xlg")
  })

  test("renders a heading with a '3xlg' size", () => {
    render(<Heading size="3xlg">UI library</Heading>)

    const heading = screen.getByRole("heading", { name: "UI library" })

    expect(heading).toHaveClass("heading--3xlg")
  })
})
