import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import SignUp from "Pages/RequestPages/Requests"

describe("Render <Request />", () => {
  afterEach(cleanup)

  test("Should render Request without Requests", () => {
    render(<SignUp />)
    expect(
      screen.getByText(/You Have No Request In This Category/i)
    ).toBeInTheDocument()
  })
})
