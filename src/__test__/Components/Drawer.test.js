import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Drawer from "Components/Drawer/Drawer"

describe("Render <Drawer />", () => {
  beforeEach(() => {
    render(
      <Drawer open toggleDrawer={() => {}}>
        <div>children</div>
      </Drawer>
    )
  })
  afterEach(cleanup)

  test("Should render with children", () => {
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })

  test("Should close Drawer", () => {
    fireEvent.click(screen.queryByRole("button"))
  })
})
