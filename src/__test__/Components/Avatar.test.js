import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import Avatar from "Components/Avatar/Avatar"

describe("Render <Avatar />", () => {
  beforeEach(() => {
    render(<Avatar />)
  })
  afterEach(cleanup)

  test("Should show Avater letter title", () => {
    expect(screen.getByText(/A/i)).toBeInTheDocument()
  })
})
