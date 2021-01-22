import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Home from "Layouts/Home/Home"

describe("Should render <App />", () => {
  afterEach(cleanup)
  // your test
  test("Should have Map and Link to login and logout", () => {
    render(<Home />)

    expect(screen.getByText(/Leaflet/i)).toBeInTheDocument()

    expect(screen.getByText(/LogIn/i)).toBeInTheDocument()
    expect(screen.getByText(/LogIn/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/login"
    )
    fireEvent.click(screen.queryByRole("button", { name: "LogIn" }))

    expect(screen.getByText(/SignUp/i)).toBeInTheDocument()
    expect(screen.getByText(/SignUp/i).closest("a")).toHaveAttribute(
      "href",
      "/auth/signup"
    )
    fireEvent.click(screen.queryByRole("button", { name: "SignUp" }))
  })
})
