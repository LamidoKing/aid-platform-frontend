import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import StatCard from "Components/StatCard/StatCard"

describe("Render <StatCard />", () => {
  beforeEach(() => {
    render(<StatCard title="title" />)
  })
  afterEach(cleanup)

  test("Should show title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  test("Should show total", () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument()
  })
  test("Should show update time", () => {
    expect(screen.getByText(/At the last minute/i)).toBeInTheDocument()
  })
})
