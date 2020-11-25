import React from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
// @material-ui Components
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
// @material-ui Icon
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
// Styles
import drawerStyles from "styles/components/drawerStyles"

const defaultProps = {
  title: "",
  children: <div />,
}

const propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  toggleDrawer: PropTypes.func.isRequired,
}

const Sidebar = observer((props) => {
  const classes = drawerStyles()
  const { open, title, children, toggleDrawer } = props
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography
            variant="subtitle1"
            noWrap
            color="secondary"
            style={{ paddingRight: "16px" }}
          >
            {title}
          </Typography>
          <IconButton onClick={toggleDrawer("drawer", false)} color="secondary">
            <ChevronLeftIcon color="secondary" fontSize="large" />
          </IconButton>
        </div>
        {children}
      </Drawer>
    </>
  )
})

Sidebar.defaultProps = defaultProps

Sidebar.propTypes = propTypes

export default Sidebar
