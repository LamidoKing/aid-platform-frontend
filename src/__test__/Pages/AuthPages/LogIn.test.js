import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import LogIn from "Pages/AuthPages/LogIn"

describe("Render <LogIn />", () => {
  beforeEach(() => {
    render(<LogIn />)
  })

  afterEach(cleanup)

  test("Should title", () => {
    expect(screen.getAllByText(/LogIn/i)[0]).toBeInTheDocument()
  })
  test("Should get Email and onChange Event", () => {
    expect(screen.getAllByText(/Email/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("Email"), {
      target: { value: "lmd@gmail.com" },
    })
  })

  test("Should get password and onChange Event", () => {
    expect(screen.getAllByText(/Password/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("Password"), {
      target: { value: "whamo" },
    })

    fireEvent.click(screen.queryByRole("button", { name: "LogIn" }))
  })

  test("Should get Link to signup", () => {
    expect(screen.getByText(/Dont have an account?/i)).toBeInTheDocument()
  })
  test("Should get Link to signup", () => {
    expect(screen.getByText(/Signup?/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/signup"
    )
  })
})
