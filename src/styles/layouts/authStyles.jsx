import { makeStyles } from "@material-ui/core/styles"
import image from "asserts/authB.jpg"

const authStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    display: "flex!important",
    height: "100%",
    margin: "0",
    minHeight: "100vh",
    alignItems: "center",
  },
}))

export default authStyles
