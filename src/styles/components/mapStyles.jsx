import { makeStyles } from "@material-ui/core/styles"

const mapStyles = makeStyles(() => ({
  map: {
    height: "100vh",
    width: "100%",
  },
  children: {
    position: "relative",
    zIndex: 900,
  },
}))

export default mapStyles
