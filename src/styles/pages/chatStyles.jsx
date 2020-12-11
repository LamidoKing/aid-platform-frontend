import { makeStyles } from "@material-ui/core/styles"

const chatStyles = makeStyles(() => ({
  content: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    minHeight: "40vh",
    minWidth: "80%",
  },
  input: {
    margin: "0px 20px",
  },
}))

export default chatStyles
