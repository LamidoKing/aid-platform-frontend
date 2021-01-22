import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import GridItem from "Components/Grid/GridItem"

describe("Render <GridItem />", () => {
  beforeEach(() => {
    render(
      <GridItem>
        <div>children</div>
      </GridItem>
    )
  })
  afterEach(cleanup)

  test("Should render with children", () => {
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
