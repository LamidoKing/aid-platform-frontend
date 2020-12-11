import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import { Variables } from "utils"
import List from "Components/List/List"
// @material-ui Components
import Button from "@material-ui/core/Button"
// @material-ui Icon
import ChatIcon from "@material-ui/icons/Chat"
import Requests from "@material-ui/icons/EventNote"
import drawerListStyles from "styles/layouts/pageSection/drawerListStyles"

const defaultProps = {
  type: "",
  handleItemClick: () => {},
  toggleDrawer: () => {},
}

const propTypes = {
  type: PropTypes.string,
  handleItemClick: PropTypes.func,
  toggleDrawer: PropTypes.func,
}

const DrawerList = observer((props) => {
  const classes = drawerListStyles()
  const { chatStore } = useStores()
  const { type, handleItemClick, toggleDrawer } = props
  return (
    <>
      <Button
        component={Link}
        to="/pages/newrequest"
        variant="contained"
        color="primary"
        className={classes.newrequestButton}
        onClick={toggleDrawer(type, false)}
      >
        New Request
      </Button>
      <List
        title="My Request"
        titleIcon={Requests}
        itemList={Variables.requestList}
        handleItemClick={handleItemClick}
      />
      <List
        title="Volunteer"
        titleIcon={Requests}
        itemList={Variables.requestList}
        handleItemClick={handleItemClick}
      />
      <List
        title="Chats"
        titleIcon={ChatIcon}
        itemList={chatStore.chats}
        handleItemClick={handleItemClick}
      />
    </>
  )
})

DrawerList.defaultProps = defaultProps

DrawerList.propTypes = propTypes

export default DrawerList
