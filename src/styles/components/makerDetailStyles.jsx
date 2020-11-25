import { makeStyles } from "@material-ui/core/styles"

const makerDetailStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  description: {
    color: "white",
    textAlign: "center",
  },
  white: {
    color: "white",
    fontSize: theme.typography.pxToRem(15),
  },
}))

export default makerDetailStyles
