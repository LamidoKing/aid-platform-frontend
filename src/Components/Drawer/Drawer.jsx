import React from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
// @material-ui Components
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
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
  const { open, children, toggleDrawer } = props
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
          <IconButton onClick={toggleDrawer("drawer", false)} color="secondary">
            <ChevronLeftIcon color="primary" fontSize="large" />
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
