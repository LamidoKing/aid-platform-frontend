import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import NewReaquestForm from "Pages/RequestPages/Sections/NewReaquestForm"

describe("Render <NewRequest />", () => {
  beforeEach(() => {
    const values = {
      title: undefined,
      description: undefined,
      type_of_request: undefined,
    }
    const location = {
      latitude: 9.21,
      longitude: 8.24,
    }

    render(
      <NewReaquestForm
        values={values}
        location={location}
        handleChange={() => {}}
        handleSummit={() => {}}
        disableButton={false}
        handleKeyPress={() => {}}
        handleChangeLocation={() => {}}
        handleClose={() => {}}
      />
    )
  })

  afterEach(cleanup)

  jest.mock("Pages/RequestPages/Sections/NewReaquestForm")

  test("Should show title", () => {
    expect(screen.getByText(/New Help Request Details/i)).toBeInTheDocument()
  })
  test("Should show Latitude", () => {
    expect(screen.getByText(/Latitude/i)).toBeInTheDocument()
  })
  test("Should show Longitude", () => {
    expect(screen.getByText(/Longitude/i)).toBeInTheDocument()
  })

  test("Should click change location summit Event", () => {
    expect(screen.getAllByText(/change/i)).toBeTruthy()

    fireEvent.click(screen.queryByRole("button", { name: /change/i }))
  })

  test("Should get Title and onChange Event", () => {
    expect(screen.getAllByText(/Title/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("Title"), {
      target: { value: "first request" },
    })
  })

  test("Should get Description and onChange Event", () => {
    expect(screen.getAllByText(/Description/i)).toBeTruthy()
    fireEvent.change(screen.queryByLabelText("Description"), {
      target: { value: "Lorepsup sdshbfhsdf" },
    })
  })

  test("Should summit Event", () => {
    expect(screen.getAllByText(/Summit/i)).toBeTruthy()

    fireEvent.click(screen.queryByRole("button", { name: /Summit/i }))
  })
})
