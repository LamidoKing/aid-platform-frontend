import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
import Typography from "@material-ui/core/Typography"
import Avatar from "Components/Avatar/Avatar"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import messageStyles from "styles/pages/messageStyles"

const defaultProps = {
  messages: [],
  sender: {},
}

const propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array]),
  sender: PropTypes.oneOfType([PropTypes.object]),
}

const Message = observer((props) => {
  const classes = messageStyles()
  const { messages, sender } = props
  let senderCount = 0

  const inlineIcon = (user) => {
    if (user === sender.id) {
      senderCount += 1
      return senderCount === 1
    }
    senderCount = 0

    return false
  }
  const ScrollToBottom = () => {
    const elementRef = useRef()
    useEffect(() => elementRef.current.scrollIntoView())
    return <div ref={elementRef} />
  }

  return (
    <>
      {messages.map((message) => {
        if (message.sender.id === sender.id) {
          return (
            <GridContainer justify="flex-start" key={message.id}>
              <GridItem xs={9} sm={8} md={8}>
                {inlineIcon(message.sender.id) && (
                  <Avatar
                    status={message.sender.status}
                    name={message.sender.first_name}
                  />
                )}

                <div className={classes.message}>
                  <Typography>{message.message}</Typography>
                </div>
              </GridItem>
            </GridContainer>
          )
        }
        inlineIcon(message.sender.id)
        return (
          <GridContainer justify="flex-end" key={message.id}>
            <GridItem xs={9} sm={8} md={4}>
              <div className={classes.message}>
                <Typography>{message.message}</Typography>
              </div>
            </GridItem>
          </GridContainer>
        )
      })}
      <ScrollToBottom />
    </>
  )
})

Message.defaultProps = defaultProps
Message.propTypes = propTypes

export default Message
