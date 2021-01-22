import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import Fab from "Components/Fab/Fab"

describe("Render <Fab />", () => {
  beforeEach(() => {
    render(<Fab Icon={MenuBookIcon} />)
  })
  afterEach(cleanup)

  test("Should click fab", () => {
    fireEvent.click(screen.queryByRole("button"))
  })
})
