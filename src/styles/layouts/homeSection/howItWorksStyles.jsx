import { makeStyles } from "@material-ui/core/styles"

const howItWorksStyles = makeStyles((theme) => ({
  rootPaper: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingBottom: "10px",
  },
  paper: {
    padding: "6px 16px",
    backgroundColor: theme.palette.primary.main,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    padding: "20px 0px",
    textAlign: "center",
  },
}))

export default howItWorksStyles
