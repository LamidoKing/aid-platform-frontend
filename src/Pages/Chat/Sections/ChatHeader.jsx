import React from "react"
import PropTypes from "prop-types"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import chatHeaderStyles from "styles/pages/chatHeaderStyles"
import { useTheme } from "@material-ui/styles"

const defaultProps = {
  chatOpen: true,
  requests: [],
  request: {},
  sender: {},
  handleBack: () => {},
  handleClose: () => {},
}

const propTypes = {
  chatOpen: PropTypes.bool,
  requests: PropTypes.oneOfType([PropTypes.array]),
  request: PropTypes.oneOfType([PropTypes.object]),
  sender: PropTypes.oneOfType([PropTypes.object]),
  handleBack: PropTypes.func,
  handleClose: PropTypes.func,
}

const ChatHeader = (props) => {
  const classes = chatHeaderStyles()
  const { chatOpen, requests, request, sender, handleBack, handleClose } = props
  const singleRequest = request.title ? request : requests[0]
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const closeButton = fullScreen && (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClose}
      className={classes.buttonText}
      size="small"
    >
      Close
    </Button>
  )
  return (
    <>
      {chatOpen ? (
        <>
          {closeButton}
          <Typography color="primary" className={classes.center}>
            {`${sender.first_name} ${sender.last_name}`}
          </Typography>
        </>
      ) : (
        <div>
          {requests.length > 1 ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonText}
              size="small"
              onClick={handleBack}
            >
              Back
            </Button>
          ) : (
            closeButton
          )}
          <Typography color="primary" className={classes.center}>
            {`${sender.first_name} ${sender.last_name} - ${singleRequest.title} (${singleRequest.type_of_request})`}
          </Typography>
        </div>
      )}
    </>
  )
}

ChatHeader.defaultProps = defaultProps
ChatHeader.propTypes = propTypes

export default ChatHeader
