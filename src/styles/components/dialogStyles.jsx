import { makeStyles } from "@material-ui/core"

const dialogStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  message: {
    color: "white",
    textAlign: "center",
  },
}))

export default dialogStyles
