import React, { useState } from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import clsx from "clsx"
// @material-ui Components
import Collapse from "@material-ui/core/Collapse"
import Hidden from "@material-ui/core/Hidden"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MapIcon from "@material-ui/icons/Map"
import MenuBookIcon from "@material-ui/icons/MenuBook"
// Components
import CounterPanel from "Components/CounterPanel/CounterPanel"
import Fab from "Components/Fab/Fab"
import Map from "Components/Map/Map"
import MobileAppBar from "Components/MobileAppBar/MobileAppBar"
import MobileDrawer from "Components/MobileDrawer/MobileDrawer"
import Drawer from "Components/Drawer/Drawer"
// Variable
import { useStores } from "hooks"
// Styles
import dashbordStyles from "styles/pages/dashbordStyles"
import DrawerList from "./Sections/DrawerList"

const propTypes = {
  children: PropTypes.element.isRequired,
}

const DrawerMain = observer((props) => {
  const { appstore, mapstore, requeststore, userStore, chatStore } = useStores()
  const history = useHistory()
  const classes = dashbordStyles()
  const { children } = props
  const [open, setOpen] = useState({
    drawer: false,
    mobile: false,
    hideCounter: false,
  })

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
    appstore.toggleOnlyMap()
  }

  const handleItemClick = (item, title) => {
    const { name } = item
    appstore.showMapPages()
    if (title === "My Request" || title === "Volunteer") {
      history.push("/pages/requests")

      return title === "My Request"
        ? requeststore.filterByStatus(name)
        : requeststore.filterVolunteerByStatus(name)
    }

    if (title === "Chats") {
      setOpen({ ...open, drawer: false })
      chatStore.setSenderRequest(item)
      history.push("/pages/chat")
      return ""
    }

    return ""
  }

  const handleMapClick = (e) => {
    if (
      (window.location.pathname === "/pages/newrequest" &&
        appstore.mapOnly === true) ||
      mapstore.dragable
    ) {
      const location = {
        latitude: e.latLng.lat(),
        longitude: e.latLng.lng(),
      }
      mapstore.setClickeLocation(location)
      appstore.showMapPages()
    }
  }

  const handleMakerClick = (request) => {
    requeststore.setRequest(request)
    mapstore.openDetail()
  }

  return (
    <div className={classes.root}>
      <Hidden mdUp implementation="js">
        {!appstore.mapOnly && (
          <MobileAppBar
            toggleDrawer={toggleDrawer}
            title="2500 Unfulfilled Help Request"
          />
        )}
      </Hidden>

      <Drawer
        title={`${userStore.currentUser.first_name} ${userStore.currentUser.last_name}`}
        open={open.drawer}
        toggleDrawer={toggleDrawer}
      >
        <DrawerList
          type="drawer"
          handleItemClick={handleItemClick}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open.drawer,
        })}
      >
        <Fab
          arial={appstore.mapOnly ? "show pages" : "map only"}
          classes={clsx(
            classes.fabMap,
            (open.drawer || open.mobile) && classes.hide
          )}
          handleClick={handleMapOnly}
          Icon={appstore.mapOnly ? MenuBookIcon : MapIcon}
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
            open={open.mobile}
            title="lamido tijjani"
            toggleDrawer={toggleDrawer}
          >
            <DrawerList
              type="mobile"
              handleItemClick={handleItemClick}
              toggleDrawer={toggleDrawer}
            />
          </MobileDrawer>
        </Hidden>
        <Map
          handleMapClick={handleMapClick}
          handleMakerClick={handleMakerClick}
        >
          {!appstore.mapOnly ? (
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
})

DrawerMain.propTypes = propTypes

export default DrawerMain
