import { makeStyles } from "@material-ui/core/styles"

const newRequestForm = makeStyles((theme) => ({
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
  location: {
    color: "white",
    textAlign: "center",
  },
  inputLogin: {
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  buttonCenter: {
    textAlign: "center",
    paddingTop: "10px",
  },
  button: {
    color: theme.palette.secondary.main,
  },
  cancelButton: {
    color: theme.palette.primary.main,
    marginRight: "15px",
  },
}))

export default newRequestForm
