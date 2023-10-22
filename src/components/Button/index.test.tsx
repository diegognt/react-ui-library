import { expect, describe, test, vi, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "./"

describe("The Button component", () => {

  afterEach(() => cleanup())

  test("throws and error if the 'label' prop is not defined", () => {
    const act = () => render(<Button label="" />)

    expect(act).toThrowError("Button must have a label")
  })

  test("renders a button with a label", () => {
    render(<Button label="Click me" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toBeInTheDocument()
  })

  test("by default, renders a Button with a 'primary' color, 'solid' variant, and 'medium' size", () => {
    render(<Button label="Click me" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--primary")
    expect(button).toHaveClass("button--solid")
    expect(button).toHaveClass("button--medium")
  })

  test("renders a button with a 'secondary' color", () => {
    render(<Button label="Click me" color="secondary" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--secondary")
  })

  test("renders a button with a 'ghost' variant", () => {
    render(<Button label="Click me" variant="ghost" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--ghost")
  })

  test("renders a button with a 'outline' variant", () => {
    render(<Button label="Click me" variant="outline" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--outline")
  })

  test("renders a button with a 'small' size", () => {
    render(<Button label="Click me" size="small" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--small")
  })

  test("renders a button with a 'large' size", () => {
    render(<Button label="Click me" size="large" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--large")
  })

  test("renders a button with a 'full-width' size", () => {
    render(<Button label="Click me" size="full-width" />)

    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toHaveClass("button--full-width")
  })

  test("renders a button with a label and a click handler", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button label="Click me" onClick={handleClick} />)

    const button = screen.getByRole("button", { name: "Click me" })
    await user.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
