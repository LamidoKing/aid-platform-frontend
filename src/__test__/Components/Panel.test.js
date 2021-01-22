import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Panel from "Components/Panel/Panel"

describe("Render <Panel />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      first_name: "firstName",
      last_name: "lastName",
    }
    const requests = [
      {
        id: 1,
        title: "title",
        description: "description",
        type_of_request: "type_of_request",
        latitude: 9.21,
        longitude: 8.24,
        status: "Unfulfill",
        user: currentUser,
        volunters: [],
      },
    ]
    render(
      <Panel
        requests={requests}
        currentUser={currentUser}
        handleDelete={() => {}}
        handleEdit={() => {}}
        handleRepublish={() => {}}
        handleFulfilled={() => {}}
      />
    )
  })
  afterEach(cleanup)

  test("Should show title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })
  test("Should show type of request", () => {
    expect(screen.getByText(/type_of_request/i)).toBeInTheDocument()
  })
  test("Should click expand", () => {
    fireEvent.click(screen.queryByRole("button"))
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(screen.getByText(/Latitude/i)).toBeInTheDocument()
    expect(screen.getByText(/Longitude/i)).toBeInTheDocument()
    expect(screen.getByText(/status/i)).toBeInTheDocument()
    expect(screen.getByText(/mark as fulfill/i)).toBeInTheDocument()
    expect(screen.getAllByRole("button")[1]).toBeInTheDocument()
    fireEvent.click(screen.queryByRole("button", { name: "mark as fulfill" }))
    fireEvent.click(screen.getAllByRole("button")[3])
    fireEvent.click(screen.getAllByRole("button")[2])
  })
})
