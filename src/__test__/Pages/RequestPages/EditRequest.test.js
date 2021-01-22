import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import NewReaquestForm from "Pages/RequestPages/Sections/NewReaquestForm"

describe("Render <EditRequest />", () => {
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
    const handleChange = () => {}
    const handleEdit = () => {}
    const handleKeyPress = () => {}
    const handleChangeLocation = () => {}
    const handleClose = () => {}

    render(
      <NewReaquestForm
        editForm
        values={values}
        location={location}
        handleChange={handleChange}
        handleSummit={handleEdit}
        disableButton={false}
        handleKeyPress={handleKeyPress}
        handleChangeLocation={handleChangeLocation}
        handleClose={handleClose}
      />
    )
  })

  afterEach(cleanup)

  test("Should show title", () => {
    expect(screen.getByText(/Edit Help Request/i)).toBeInTheDocument()
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

  test("Should get Type of Request and onChange Event", () => {
    expect(screen.getAllByText(/Type of Request/i)).toBeTruthy()
    //   fireEvent.change(screen.queryByLabelText("Type of Request"), {
    //     target: { value: "One Time Request" },
    //   })
  })

  test("Should Edit Event", () => {
    expect(screen.getAllByText(/Edit/i)).toBeTruthy()

    fireEvent.click(screen.queryByRole("button", { name: /Edit/i }))
  })
})
