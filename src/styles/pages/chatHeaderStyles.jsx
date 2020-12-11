import { makeStyles } from "@material-ui/core/styles"

const chatHeaderStyles = makeStyles((theme) => ({
  root: {
    background: "black",
  },
  heading: {
    flexShrink: 0,
    flex: "auto",
  },
  details: {
    backgroundColor: theme.palette.secondary.main,
  },
  column: {
    flexBasis: "50%",
  },
  center: {
    textAlign: "center",
  },
  whiteColor: {
    color: "white",
  },
  buttonText: {
    background: theme.palette.secondary.light,
    color: theme.palette.primary.main,
  },
}))

export default chatHeaderStyles
