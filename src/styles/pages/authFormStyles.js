import { makeStyles } from "@material-ui/core/styles"

const authFormStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    margin: "30px 0px",
    padding: "30px 50px 10px 50px",
  },
  title: {
    color: "white",
    textAlign: "center",
    padding: "20px 0px 30px 0px",
  },
  inputLogin: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  inputsignUP: {
    textAlign: "center",
    paddingBottom: "3px",
  },
  buttonCenter: {
    textAlign: "center !important",
    padding: "20px 0px",
  },
  button: {
    color: "black",
  },
  fot: {
    textAlign: "center !important",
    color: "white",
    paddingBottom: "10px",
  },
}))

export default authFormStyles
