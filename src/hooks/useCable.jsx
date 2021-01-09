import { useEffect, useState, useContext } from "react"
import { actionCableContext } from "../ActionCable"

const useCable = (channelName, chatId) => {
  const cable = useContext(actionCableContext)
  const [reciervedData, setreciervedData] = useState()
  const [status, setStatus] = useState("idle")

  useEffect(() => {
    const channel = cable.subscriptions.create(
      { channel: channelName, chat_id: chatId },
      {
        connected() {
          // Called when the subscription is ready for use on the server
          setStatus("Channel Connected!!!")
        },

        disconnected() {
          // Called when the subscription has been terminated by the server
          setStatus("Channel Disconnected!!!")
        },

        received(data) {
          // Called when there's incoming data on the websocket for this channel
          setreciervedData(data)
        },
      }
    )
    return () => {
      channel.unsubscribe()
    }
  }, [channelName, chatId, cable, status])

  return { data: reciervedData, status }
}

export default useCable
