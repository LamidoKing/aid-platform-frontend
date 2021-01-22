import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import MobileAppBar from "Components/MobileAppBar/MobileAppBar"

describe("Render <MobileAppBar />", () => {
  beforeEach(() => {
    render(<MobileAppBar title="AppBar" toggleDrawer={() => {}} />)
  })
  afterEach(cleanup)

  test("Should render title", () => {
    expect(screen.getByText(/AppBar/i)).toBeInTheDocument()
  })

  test("Should toggle Drawer", () => {
    fireEvent.click(screen.queryByRole("button"))
  })
})
