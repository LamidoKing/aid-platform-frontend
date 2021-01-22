import { makeStyles } from "@material-ui/core/styles"

const counterPanelStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "15%",
      maxHeight: "29vh",
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: "28vh",
      marginTop: "10px",
    },
    "@media(width: 1024px)": {
      marginTop: "15px",
      maxHeight: "20vh",
    },
    overflow: "auto",
    maxHeight: "26vh",
  },
  paper: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  button: {
    margin: "0px 15px 10px 15px",
    color: `${theme.palette.secondary.main} !important`,
  },
  hideIcon: {
    color: "white",
  },
}))

export default counterPanelStyles
