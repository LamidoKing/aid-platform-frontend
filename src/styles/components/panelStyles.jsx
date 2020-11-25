import { makeStyles } from "@material-ui/core/styles"

const panelStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "50%",
    color: theme.palette.primary.main,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(4, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  accordion: {
    background: theme.palette.secondary.main,
    marginBottom: "10px",
  },

  white: {
    color: "white",
  },
  button: {
    color: theme.palette.secondary.main,
  },
}))

export default panelStyles
