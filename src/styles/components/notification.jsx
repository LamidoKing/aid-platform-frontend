import { makeStyles } from "@material-ui/core/styles"

const notificationStyles = makeStyles(() => ({
  root: {
    height: "100px",
    width: "60vh",
    backgroundColor: "#424242",
    textAlign: "center !important",
  },

  message: {
    padding: "0px, 20px",
    color: "yellow",
    fontSize: "20px",
  },
}))

export default notificationStyles
