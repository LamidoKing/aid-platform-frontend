import React from "react"
import PropTypes from "prop-types"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import FulfilledIcon from "@material-ui/icons/EventAvailable"
import UnfulfiledIcon from "@material-ui/icons/EventBusy"
import requestsList from "styles/pages/requestsList"

const defaultProps = {
  requests: [],
  sender: {},
  handleClick: () => {},
}

const propTypes = {
  requests: PropTypes.oneOfType([PropTypes.array]),
  sender: PropTypes.oneOfType([PropTypes.object]),
  handleClick: PropTypes.func,
}

const RequestList = (props) => {
  const classes = requestsList()
  const { requests, handleClick, sender } = props

  const listItem = (request) => {
    return (
      <ListItem button onClick={() => handleClick(request)} key={request.id}>
        <ListItemIcon>
          {request.status === "Unfulfill" ? (
            <UnfulfiledIcon color="primary" />
          ) : (
            <FulfilledIcon color="primary" />
          )}
        </ListItemIcon>
        <ListItemText primary={request.title} className={classes.listText} />
      </ListItem>
    )
  }

  const volunterByme = (lists) =>
    lists.find((request) => request.user_id === sender.id)

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="chat request list by user">
        {requests.map((request) => {
          if (request.user_id !== sender.id) {
            return listItem(request)
          }
          return ""
        })}
      </List>
      {volunterByme(requests) && (
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.title}
        >
          Volunter By Me
        </Typography>
      )}

      <List component="nav" aria-label="chat request list by me">
        {requests.map((request) => {
          if (request.user_id === sender.id) {
            return listItem(request)
          }
          return ""
        })}
      </List>
    </div>
  )
}

RequestList.defaultProps = defaultProps
RequestList.propTypes = propTypes

export default RequestList
