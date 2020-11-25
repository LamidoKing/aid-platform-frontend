import React from "react"
import PropTypes from "prop-types"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import mobileDrawerStyles from "styles/components/mobileDrawerStyles"

const propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  toggleDrawer: PropTypes.func.isRequired,
}

const defaultProps = {
  title: "",
  children: <div />,
}

const MobileDrawer = (props) => {
  const classes = mobileDrawerStyles()
  const { open, title, children, toggleDrawer } = props
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
        <div className={classes.drawerHeader}>
          <Typography variant="subtitle1" noWrap color="secondary">
            {title}
          </Typography>
        </div>
        {children}
      </SwipeableDrawer>
    </>
  )
}

MobileDrawer.propTypes = propTypes
MobileDrawer.defaultProps = defaultProps

export default MobileDrawer
