import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Dialog from "Components/Dialog/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import chatStyles from "styles/pages/chatStyles"
import ChatHeader from "./Sections/ChatHeader"
import Message from "./Sections/Message"
import ChatInput from "./Sections/ChatInput"
import RequestList from "./Sections/RequestList"

const Chat = observer(() => {
  const classes = chatStyles()
  const history = useHistory()
  const { appstore, chatStore } = useStores()
  const { chatDialog, chatWithMoreRequest } = appstore
  const initialState = { message: "" }

  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleClose = () => {
    appstore.haandleChatDialog(false)
    history.push("/pages")
  }
  const handlenext = (request) => {
    chatStore.setChatRequest(request, chatStore.sender)
    appstore.handlechatWithMoreRequest(false)
  }

  const handleBack = () => {
    appstore.handlechatWithMoreRequest(true)
    chatStore.clearChatMessages()
  }

  const handleSend = () => {
    if (isnoEmpathyValue) {
      const message = {
        sender_id: chatStore.currentUser,
        receiver_id: chatStore.sender,
        request_id: chatStore.chatRequest,
        message: values.message,
      }
      chatStore.newMessage(message)
      chatStore.setChatMessage(chatStore.chatRequest, chatStore.sender)
      values.message = ""
    }
  }

  useEffect(() => {
    if (chatStore.senderRequest.length > 1) {
      appstore.handlechatWithMoreRequest(true)
    }
    if (chatStore.senderRequest.length === 1) {
      chatStore.setChatRequest(chatStore.senderRequest[0], chatStore.sender)
    }
    if (chatStore.sender.id === undefined) {
      history.push("/pages")
    }
    const clear = () => {
      appstore.haandleChatDialog(true)
      chatStore.clear()
      appstore.handlechatWithMoreRequest(false)
    }
    return clear
  }, [appstore, chatStore, history])

  return (
    <div>
      <Dialog
        open={chatDialog}
        handleClose={handleClose}
        Component={
          <>
            <DialogTitle id="form-dialog-title" color="primary">
              <ChatHeader
                chatOpen={chatWithMoreRequest}
                request={chatStore.chatRequest}
                requests={chatStore.senderRequest}
                sender={chatStore.sender}
                handleBack={handleBack}
                handleClose={handleClose}
              />
            </DialogTitle>
            <DialogContent className={classes.content}>
              {chatWithMoreRequest && chatStore.senderRequest.length > 1 ? (
                <RequestList
                  requests={chatStore.senderRequest}
                  handleClick={handlenext}
                  sender={chatStore.sender}
                />
              ) : (
                <Message
                  messages={chatStore.chatMessages}
                  sender={chatStore.sender}
                />
              )}
            </DialogContent>
            {!chatWithMoreRequest && (
              <DialogActions className={classes.input}>
                <ChatInput
                  values={values}
                  handleChange={handleChange}
                  handleSend={handleSend}
                />
              </DialogActions>
            )}
          </>
        }
      />
    </div>
  )
})

export default Chat
