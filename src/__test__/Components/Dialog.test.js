import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Dialog from "Components/Dialog/Dialog"

describe("Render <Dialog />", () => {
  afterEach(cleanup)

  test("Should show prompht Dialog with message title and cancel, ok button", () => {
    render(<Dialog open message="hello" title="greeting" />)
    expect(screen.getByText(/greeting/i)).toBeInTheDocument()
    expect(screen.getByText(/hello/i)).toBeInTheDocument()

    fireEvent.click(screen.queryByRole("button", { name: "ok" }))
    fireEvent.click(screen.queryByRole("button", { name: "cancel" }))
  })

  test("Should show error message Dialog with message and refresh, cancel button", () => {
    render(<Dialog open errorMessage="network error" />)
    expect(screen.getByText(/network error/i)).toBeInTheDocument()

    fireEvent.click(screen.queryByRole("button", { name: "refresh" }))
    fireEvent.click(screen.queryByRole("button", { name: "cancel" }))
  })

  test("Should show commponent Dialog ", () => {
    render(<Dialog open Component={<div>component</div>} />)
    expect(screen.getByText(/component/i)).toBeInTheDocument()
  })
})
