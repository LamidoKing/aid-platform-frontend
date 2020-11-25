import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Variables } from "utils"
import List from "Components/List/List"
// @material-ui Components
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
// @material-ui Icon
import ChatIcon from "@material-ui/icons/Chat"
import Requests from "@material-ui/icons/EventNote"

const styles = makeStyles((theme) => ({
  newrequestButton: {
    marginTop: "10px",
    color: theme.palette.secondary.main,
  },
}))

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

const DrawerList = (props) => {
  const classes = styles()
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
      <List title="Chats" titleIcon={ChatIcon} itemList={Variables.chatList} />
    </>
  )
}

DrawerList.defaultProps = defaultProps

DrawerList.propTypes = propTypes

export default DrawerList
