import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import ChatInput from "Pages/Chat/Sections/ChatInput"

describe("Render <ChatHeader />", () => {
  afterEach(cleanup)

  beforeEach(() => {
    render(<ChatInput values={{ message: undefined }} />)
  })

  test("Should input message", () => {
    fireEvent.change(screen.queryByLabelText("Aa"), {
      target: { value: "Lorepsup sdshbfhsdf" },
    })
  })

  test("Should send message", () => {
    fireEvent.click(screen.queryByRole("button"))
  })
})
