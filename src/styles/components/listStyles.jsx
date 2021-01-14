import { green, red } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"

const listStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  listText: {
    color: theme.palette.primary.main,
  },
  titleColor: {
    color: "white",
  },
  offlineColor: {
    color: red[500],
  },
  onlineIcon: {
    color: green[500],
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default listStyles
