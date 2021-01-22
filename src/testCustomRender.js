/* eslint-disable react/prop-types */
import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { StoresProvider, stores } from "mobxStore"
import { ThemeProvider } from "@material-ui/styles"
import theme from "styles/theme/theme"

const Wrapper = ({ children }) => {
  return (
    <StoresProvider value={stores}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MemoryRouter>
    </StoresProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
