import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import StatsCardSection from "Pages/Stats/Sections/StatsCardSection"

describe("Render <Stats />", () => {
  beforeEach(() => {
    const allStats = [
      { title: "Total Request", total: 15 },
      { title: "Total Unfulfill Request", total: 9 },
      { title: "Total Fulfill Request", total: 6 },
    ]
    render(<StatsCardSection data={allStats} title="All Request Statistic" />)
  })
  afterEach(cleanup)

  test("Should title of the statistic", () => {
    expect(screen.getByText(/All Request Statistic/i)).toBeInTheDocument()
  })

  test("Should title of the Total Request", () => {
    expect(screen.getByText(/Total Request/i)).toBeInTheDocument()
  })

  test("Should show total number of the request", () => {
    expect(screen.getByText(/15/i)).toBeInTheDocument()
  })

  test("Should title of the Total Unfulfill Request", () => {
    expect(screen.getByText(/Total Request/i)).toBeInTheDocument()
  })

  test("Should show total number of Total Unfulfill Request", () => {
    expect(screen.getByText(/9/i)).toBeInTheDocument()
  })

  test("Should title of the Total Fulfill Request", () => {
    expect(screen.getByText(/Total Request/i)).toBeInTheDocument()
  })

  test("Should show total number of Total Fulfill Request", () => {
    expect(screen.getByText(/6/i)).toBeInTheDocument()
  })

  test("Should last update of stats", () => {
    expect(screen.getAllByText(/At the last minute/i)).toBeTruthy()
  })
})
