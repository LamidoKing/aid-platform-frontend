import React from "react"
import PropTypes from "prop-types"
import SendIcon from "@material-ui/icons/Send"
import IconButton from "@material-ui/core/IconButton"
import Input from "Components/Input/Input"

const defaultProps = {
  values: {},
  handleChange: () => {},
  handleSend: () => {},
}

const propTypes = {
  values: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func,
  handleSend: PropTypes.func,
}

const ChatInput = (props) => {
  const { values, handleChange, handleSend } = props
  return (
    <>
      <Input
        id="message"
        value={values.message}
        handleChange={handleChange("message")}
        adornment={
          <IconButton
            size="small"
            style={{ color: "white" }}
            onClick={handleSend}
          >
            <SendIcon color="primary" />
          </IconButton>
        }
      />
    </>
  )
}

ChatInput.defaultProps = defaultProps
ChatInput.propTypes = propTypes
export default ChatInput
