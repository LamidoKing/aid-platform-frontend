import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import RequestList from "Pages/Chat/Sections/RequestList"

describe("Render <RequestList />", () => {
  afterEach(cleanup)

  beforeEach(() => {
    const sender = {
      id: 1,
      first_name: "firstName",
      last_name: "lastName",
    }
    const requests = [
      {
        id: 1,
        title: "title",
        type_of_request: "type_of_request",
        user: { id: 2, first_name: "firstName", last_name: "lastName" },
      },
      {
        id: 2,
        title: "title",
        type_of_request: "type_of_request",
        user: { ...sender },
      },
    ]
    render(<RequestList chatOpen={false} sender={sender} requests={requests} />)
  })

  test("Should show title of the request Requests", () => {
    expect(screen.getAllByText(/title/i)).toBeTruthy()
  })

  test("Should show request volunter by user Requests", () => {
    expect(screen.getByText(/Volunter By Me/i)).toBeInTheDocument()
  })
})
