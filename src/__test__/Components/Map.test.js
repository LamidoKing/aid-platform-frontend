import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Map from "Components/Map/Map"

describe("Render <Map />", () => {
  beforeEach(() => {
    render(
      <Map>
        <div>children</div>
      </Map>
    )
  })
  afterEach(cleanup)

  test("Should render Map", () => {
    expect(screen.getAllByText(/Leaflet/i)[0].closest("a")).toHaveAttribute(
      "href",
      "https://leafletjs.com"
    )
  })

  test("Should render Tile", () => {
    expect(screen.queryByRole("presentation").closest("img")).toHaveAttribute(
      "src",
      "https://c.tile.openstreetmap.org/2/1/1.png"
    )
  })

  test("Should zoom in Map", () => {
    fireEvent.click(screen.getByText("+"))
  })

  test("Should zoom out Map", () => {
    fireEvent.click(screen.getByText("−"))
  })
})
