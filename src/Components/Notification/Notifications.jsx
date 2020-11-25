/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import Snackbar from "@material-ui/core/Snackbar"
import Slide from "@material-ui/core/Slide"
import notificationStyles from "styles/components/notification"

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

const Notifications = (props) => {
  const classes = notificationStyles()
  const { open, message, handleCloseNotification } = props

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={9000}
        onClose={handleCloseNotification}
        TransitionComponent={TransitionDown}
        message={message}
        key={TransitionDown.name}
        ContentProps={{
          classes: {
            root: `${classes.root}`,
            message: classes.message,
          },
        }}
      />
    </div>
  )
}

Notifications.defaultProps = {
  open: false,
  message: "",
  handleCloseNotification: () => {},
}

Notifications.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  handleCloseNotification: PropTypes.func,
}
export default Notifications
