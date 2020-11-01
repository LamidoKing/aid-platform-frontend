import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1FB6FF",
      light: "#4bc4ff",
      dark: "#157fb2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#333333",
      main: "#000000",
      dark: "#000000",
      contrastText: "#000",
    },
  },
  type: "dark",
})

export default theme
