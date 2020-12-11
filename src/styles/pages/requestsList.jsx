import { makeStyles } from "@material-ui/core/styles"

const requestsList = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
  },
  listText: {
    color: theme.palette.primary.main,
  },
  title: {
    textAlign: "center",
  },
}))

export default requestsList
