import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import CounterPanel from "Components/CounterPanel/CounterPanel"

describe("Render <CounterPanel />", () => {
  afterEach(cleanup)

  test("Should show unfulfilled request numbers", () => {
    render(<CounterPanel />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
  })

  test("Should show Unfulfilled Help Request title", () => {
    render(<CounterPanel />)
    expect(screen.getByText(/Unfulfilled Help Request/i)).toBeInTheDocument()
  })

  test("Should show Link to login and event click", () => {
    render(<CounterPanel />)
    expect(screen.getByText(/LogIn/i)).toBeInTheDocument()
    expect(screen.getByText(/LogIn/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/login"
    )
    fireEvent.click(screen.queryByRole("button", { name: "LogIn" }))
  })

  test("Should show Link to SignUp and event click", () => {
    render(<CounterPanel />)
    expect(screen.getByText(/SignUp/i)).toBeInTheDocument()
    expect(screen.getByText(/SignUp/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/signup"
    )
    fireEvent.click(screen.queryByRole("button", { name: "SignUp" }))
  })

  test("Should show Avater letter title", () => {
    render(<CounterPanel auth />)
    fireEvent.click(screen.queryByRole("button"))
  })
})
