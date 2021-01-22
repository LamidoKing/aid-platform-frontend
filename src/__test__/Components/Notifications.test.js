import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import Notifications from "Components/Notification/Notifications"

describe("Render <Notifications />", () => {
  beforeEach(() => {
    render(<Notifications open message="Done" />)
  })
  afterEach(cleanup)

  test("Should show Avater letter title", () => {
    expect(screen.getByText(/Done/i)).toBeInTheDocument()
  })

  test("Should render Alert panel", () => {
    expect(screen.queryByRole("alert")).toBeTruthy()
  })
})
