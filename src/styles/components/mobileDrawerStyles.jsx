import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240

const mobileDrawerStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
  },
  drawerHeader: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 6),
    },
    backgroundColor: theme.palette.primary.main,
  },
}))

export default mobileDrawerStyles
