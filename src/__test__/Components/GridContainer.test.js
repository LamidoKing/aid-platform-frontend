import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import GridContainer from "Components/Grid/GridContainer"

describe("Render <GridContainer />", () => {
  beforeEach(() => {
    render(
      <GridContainer>
        <div>children</div>
      </GridContainer>
    )
  })
  afterEach(cleanup)

  test("Should render with children", () => {
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
