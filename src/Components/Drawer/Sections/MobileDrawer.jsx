import React from "react"
import PropTypes from "prop-types"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"

const propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  open: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  toggleDrawer: PropTypes.func.isRequired,
}

const defaultProps = {
  title: "",
  children: <div />,
}

const MobileDrawer = (props) => {
  const { classes, open, title, children, toggleDrawer } = props
  return (
    <>
      <div className={classes.drawerHeader} />
      <SwipeableDrawer
        anchor="left"
        open={open.mobile}
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
