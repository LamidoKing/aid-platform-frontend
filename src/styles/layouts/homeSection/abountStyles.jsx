import { makeStyles } from "@material-ui/core/styles"

const center = {
  textAlign: "center",
}
const aboutStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
    paddingBottom: "10px",
  },
  title: {
    color: theme.palette.primary.main,
    ...center,
  },
  body: {
    color: "white",
    ...center,
    padding: "10px 50px",
  },
  icon: {
    ...center,
    paddingTop: "10px",
  },
}))

export default aboutStyles
