import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240

const drawerStyles = makeStyles((theme) => ({
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
  menuButtomMobile: {
    paddingRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
    },
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
  listText: {
    color: theme.palette.primary.main,
  },
  fabMap: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 19999999,
  },
  newrequestButton: {
    marginTop: "10px",
    color: theme.palette.secondary.main,
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

export default drawerStyles
