import React from "react"
import { render, screen, cleanup } from "testCustomRender"
import ChatHeader from "Pages/Chat/Sections/ChatHeader"

describe("Render <ChatHeader />", () => {
  afterEach(cleanup)

  beforeEach(() => {
    const sender = {
      first_name: "firstName",
      last_name: "lastName",
    }
    const requests = [
      {
        title: "title",
        type_of_request: "type_of_request",
      },
    ]
    render(<ChatHeader chatOpen={false} sender={sender} requests={requests} />)
  })

  test("Should render firstName without Requests", () => {
    expect(screen.getByText(/firstName/i)).toBeInTheDocument()
  })

  test("Should render lastName without Requests", () => {
    expect(screen.getByText(/lastName/i)).toBeInTheDocument()
  })

  test("Should render title without Requests", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  test("Should render type_of_request without Requests", () => {
    expect(screen.getByText(/type_of_request/i)).toBeInTheDocument()
  })
})
