import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240

const dashbordStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    position: "fixed",
    top: "50%",
    bottom: "50%",
    zIndex: 19999999,
    left: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    [theme.breakpoints.up("md")]: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  },
  children: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "15%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "40px",
      height: "75vh",
    },
    "@media(width: 1024px)": {
      marginTop: "10%",
    },
    overflow: "auto",
    height: "80vh",
  },
  fabMap: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 19999999,
  },
  fabCounter: {
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  fabCounterMargin: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10%",
    },
  },
}))

export default dashbordStyles
