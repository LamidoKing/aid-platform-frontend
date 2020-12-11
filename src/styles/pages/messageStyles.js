import { makeStyles } from "@material-ui/core/styles"

const messageStyles = makeStyles((theme) => ({
  message: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "25px",
    padding: "15px",
    marginBottom: "20px",
    color: "white",
  },
}))

export default messageStyles
