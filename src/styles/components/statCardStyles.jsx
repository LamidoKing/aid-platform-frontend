import { makeStyles } from "@material-ui/core/styles"

const statCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: theme.palette.secondary.main,
    margin: "10px 0px",
  },
  cardHeader: {
    textAlign: "end",
    color: theme.palette.primary.main,
  },
  white: {
    color: "white",
  },
}))

export default statCardStyles
