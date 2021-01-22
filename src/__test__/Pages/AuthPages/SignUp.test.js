import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import SignUp from "Pages/AuthPages/SignUp"

describe("Render <SignUp />", () => {
  beforeEach(() => {
    render(<SignUp />)
  })

  afterEach(cleanup)

  jest.mock("Pages/AuthPages/AuthForm")

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
    fireEvent.click(screen.queryByRole("button", { name: "SignUp" }))
  })

  test("Should get firstName and onChange Event", () => {
    expect(screen.getAllByText(/First Name/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("First Name"), {
      target: { value: "lmd" },
    })
  })

  test("Should get lastName and onChange Event", () => {
    expect(screen.getAllByText(/Last Name/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("Last Name"), {
      target: { value: "tj" },
    })
    fireEvent.click(screen.queryByRole("button", { name: "SignUp" }))
  })
})
