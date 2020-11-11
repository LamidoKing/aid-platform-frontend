import { makeStyles } from "@material-ui/core/styles"

const homeStyles = makeStyles((theme) => ({
  children: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      height: "60vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "72vh",
      marginTop: "20px",
    },
    "@media(width: 1024px)": {
      marginTop: "70px",
    },
    overflow: "auto",
    height: "80vh",
  },
}))

export default homeStyles
