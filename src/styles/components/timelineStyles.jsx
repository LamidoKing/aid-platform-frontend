import { makeStyles } from "@material-ui/core/styles"

const timelineStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    padding: "20px 10px 0px",
    textAlign: "center",
    color: "white",
  },
  dot: {
    color: "white",
  },
}))

export default timelineStyles
