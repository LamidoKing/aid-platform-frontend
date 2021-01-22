import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import List from "Components/List/List"
import { Variables } from "utils"

describe("Render <List />", () => {
  beforeEach(() => {
    render(<List titleIcon={MenuBookIcon} itemList={Variables.requestList} />)
  })
  afterEach(cleanup)

  test("Should show items title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  test("Should click Item", () => {
    fireEvent.click(screen.queryByRole("button"))
  })
})
