import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import { Variables } from "utils"
import Timeline from "Components/Timeline/CustomTimeline"

describe("Render <Timeline />", () => {
  beforeEach(() => {
    render(<Timeline array={Variables.fulfullHelp} title="Help" />)
  })
  afterEach(cleanup)

  test("Should show title", () => {
    expect(screen.getByText("Help")).toBeInTheDocument()
  })

  test("Should show step", () => {
    expect(screen.getByText(/step one/i)).toBeInTheDocument()
  })
})
