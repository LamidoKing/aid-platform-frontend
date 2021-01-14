import React from "react"
import PropTypes from "prop-types"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import mobileDrawerStyles from "styles/components/mobileDrawerStyles"

const propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  toggleDrawer: PropTypes.func.isRequired,
}

const defaultProps = {
  children: <div />,
}

const MobileDrawer = (props) => {
  const classes = mobileDrawerStyles()
  const { open, children, toggleDrawer } = props
  return (
    <>
      <div className={classes.drawerHeader} />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer("mobile", false)}
        onOpen={toggleDrawer("mobile", true)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {children}
      </SwipeableDrawer>
    </>
  )
}

MobileDrawer.propTypes = propTypes
MobileDrawer.defaultProps = defaultProps

export default MobileDrawer
