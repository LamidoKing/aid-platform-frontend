import React from "react"
import { render, screen, fireEvent, cleanup } from "testCustomRender"
import Input from "Components/Input/Input"

describe("Render <Input />", () => {
  beforeEach(() => {
    const value = ""
    render(<Input label="input" value={value} id="input" />)
  })
  afterEach(cleanup)

  test("Should change input", () => {
    fireEvent.change(screen.queryByLabelText("input"), {
      target: { value: "Lorepsup sdshbfhsdf" },
    })
  })

  test("Should get input label message", () => {
    expect(screen.queryByLabelText("input")).toBeTruthy()
  })
})
