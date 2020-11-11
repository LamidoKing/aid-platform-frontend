import { makeStyles } from "@material-ui/core/styles"

const listStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  listText: {
    color: theme.palette.primary.main,
  },
  titleColor: {
    color: "white",
  },
  offlineColor: {
    color: "grey",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default listStyles
