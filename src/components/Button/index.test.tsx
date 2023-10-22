import { expect, describe, test, vi, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "./"

describe("The Button component", () => {

  afterEach(() => cleanup())

  test("renders a button with a label", () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toBeInTheDocument()
  })

  test("by default, renders a Button with a 'primary' color, 'solid' variant, and 'medium' size", () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--primary")
    expect(button).toHaveClass("button--solid")
    expect(button).toHaveClass("button--medium")
  })

  test("renders a button with a 'secondary' color", () => {
    render(<Button color="secondary">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--secondary")
  })

  test("renders a button with a 'ghost' variant", () => {
    render(<Button variant="ghost">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--ghost")
  })

  test("renders a button with a 'outline' variant", () => {
    render(<Button variant="outline">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--outline")
  })

  test("renders a button with a 'small' size", () => {
    render(<Button size="small">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--small")
  })

  test("renders a button with a 'large' size", () => {
    render(<Button size="large">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--large")
  })

  test("renders a button with a 'full-width' size", () => {
    render(<Button size="full-width">Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--full-width")
  })

  test("renders a button with a label and a click handler", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole("button", { name: "Click me" })
    await user.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
