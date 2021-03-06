import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import mobileAppBarStyles from "styles/components/mobileAppBarStyles"

const propTypes = {
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

const MobileAppBar = (props) => {
  const classes = mobileAppBarStyles()
  const { title, toggleDrawer } = props

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("mobile", true)}
            edge="start"
            className={classes.menuButtomMobile}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap color="secondary">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

MobileAppBar.propTypes = propTypes

export default MobileAppBar
