import React, { useState } from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import clsx from "clsx"
// @material-ui Components
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
// @material-ui Icon
import ChatIcon from "@material-ui/icons/Chat"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MapIcon from "@material-ui/icons/Map"
import Requests from "@material-ui/icons/EventNote"
// Components
import CounterPanel from "Components/CounterPanel/CounterPanel"
import DrawerList from "Components/List/List"
import Fab from "Components/Fab/Fab"
import Map from "Components/Map/Map"
import MobileAppBar from "Components/Drawer/Sections/MobileAppBar"
import MobileDrawer from "Components/Drawer/Sections/MobileDrawer"
// Vriable
import { Variables } from "utils"
// Styles
import drawerStyles from "styles/components/drawerStyles"

const propTypes = {
  children: PropTypes.element.isRequired,
}

const DrawerMain = (props) => {
  const history = useHistory()
  const classes = drawerStyles()
  const { children } = props
  const [open, setOpen] = useState({
    drawer: false,
    mobile: false,
    hideCounter: false,
  })
  const [mapOnly, setMapOnly] = useState(true)

  const toggleDrawer = (type, value) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setOpen({ ...open, [type]: value })
  }

  const handleMapOnly = () => {
    setMapOnly(!mapOnly)
  }

  const handleItemClick = (id) => {
    history.push(id)
  }

  return (
    <div className={classes.root}>
      <Hidden mdUp implementation="js">
        <MobileAppBar
          classes={clsx(classes.menuButtomMobile, open.drawer && classes.hide)}
          toggleDrawer={toggleDrawer}
          title="2500 Unfulfilled Help Request"
        />
      </Hidden>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open.drawer}
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
            lamido tijjani
          </Typography>
          <IconButton onClick={toggleDrawer("drawer", false)} color="secondary">
            <ChevronLeftIcon color="secondary" fontSize="large" />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.newrequestButton}
        >
          New Request
        </Button>
        <DrawerList
          title="My Request"
          titleIcon={Requests}
          itemList={Variables.requestList}
          handleItemClick={handleItemClick}
        />
        <DrawerList
          title="Chats"
          titleIcon={ChatIcon}
          itemList={Variables.chatList}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open.drawer,
        })}
      >
        <Fab
          arial="map only"
          classes={clsx(
            classes.fabMap,
            (open.drawer || open.mobile) && classes.hide
          )}
          handleClick={handleMapOnly}
          Icon={MapIcon}
        />
        <Hidden smDown implementation="css">
          <Fab
            arial="open drawer"
            handleClick={toggleDrawer("drawer", true)}
            classes={clsx(classes.menuButton, open.drawer && classes.hide)}
            Icon={ExitToAppIcon}
          />
        </Hidden>
        <Hidden mdUp implementation="js">
          <MobileDrawer
            classes={classes}
            open={open}
            title="lamido tijjani"
            toggleDrawer={toggleDrawer}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.newrequestButton}
            >
              New Request
            </Button>
            <DrawerList
              title="My Request"
              titleIcon={ChatIcon}
              itemList={Variables.requestList}
              handleItemClick={handleItemClick}
            />
            <DrawerList
              title="Chats"
              titleIcon={ChatIcon}
              itemList={Variables.chatList}
            />
          </MobileDrawer>
        </Hidden>
        <Map>
          {mapOnly ? (
            <>
              <Hidden smDown implementation="css">
                <Collapse in={open.hideCounter}>
                  <CounterPanel auth handleHideCounter={toggleDrawer} />
                </Collapse>
                <Collapse in={!open.hideCounter}>
                  <Fab
                    arial="show counter"
                    classes={clsx(
                      classes.fabCounter,
                      open.mobile && classes.hide
                    )}
                    handleClick={toggleDrawer("hideCounter", true)}
                    Icon={ExpandMoreIcon}
                  />
                </Collapse>
              </Hidden>
              <div
                className={clsx(
                  classes.children,
                  !open.hideCounter && classes.fabCounterMargin
                )}
              >
                {children}
              </div>
            </>
          ) : (
            <div />
          )}
        </Map>
      </main>
    </div>
  )
}

DrawerMain.propTypes = propTypes

export default DrawerMain
