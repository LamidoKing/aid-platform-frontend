import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@material-ui/styles"
import theme from "styles/theme/theme"
import "index.css"
import App from "App"
import { StoresProvider, stores } from "mobxStore"
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import reportWebVitals from "reportWebVitals"

ReactDOM.render(
  <BrowserRouter>
    <StoresProvider value={stores}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoresProvider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
