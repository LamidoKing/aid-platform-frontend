import { makeStyles } from "@material-ui/core/styles"

const avatarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  offline: {
    color: "red",
  },
}))

export default avatarStyles
