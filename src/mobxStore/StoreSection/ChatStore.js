import { makeAutoObservable, autorun, when } from "mobx"
import { Variables } from "utils"

class ChatStore {
  allMessage = Variables.messages

  messages = []

  chats = []

  senderRequest = []

  requestVolunterByMe = []

  sender = {}

  chatMessages = []

  chatRequest = {}

  constructor(userStore) {
    makeAutoObservable(this)
    this.currentUser = userStore.currentUser
    // this.chats = this.userChats
    autorun(() => {
      this.messages = this.userMessages
      when(
        // Once...
        () => this.chats.length < this.userChats.length,
        // ... then.
        () => {
          this.chats = this.userChats
          return ""
        }
      )
    })
  }

  get userMessages() {
    const messages = this.allMessage.filter(
      (m) =>
        m.receiver_id.id === this.currentUser.id ||
        m.sender_id.id === this.currentUser.id
    )
    // this.userChats(messages)

    return messages
  }

  setuserChats() {
    this.chats = this.userChats
  }

  get userChats() {
    const chats = []

    this.messages.forEach((m) => {
      if (
        chats.find((object) => object.id === m.sender_id.id) === undefined &&
        m.receiver_id.id === this.currentUser.id
      ) {
        chats.push(m.sender_id)
      }
    })

    return chats
  }

  setSenderRequest(sender) {
    const isDuplicatete = (requests, message) =>
      requests.find((object) => object.id === message.request_id.id) ===
      undefined

    const requests = []
    this.messages.forEach((m) => {
      if (m.sender_id.id === sender.id || m.receiver_id.id === sender.id) {
        if (isDuplicatete(requests, m)) {
          requests.push(m.request_id)
        }
      }
    })
    this.senderRequest = requests
    this.sender = sender
  }

  setChatMessage(request, sender) {
    this.clearChatMessages()
    this.messages.forEach((msg) => {
      if (
        (msg.sender_id.id === sender.id ||
          msg.sender_id.id === this.currentUser.id) &&
        (msg.receiver_id.id === sender.id ||
          msg.receiver_id.id === this.currentUser.id) &&
        msg.request_id.id === request.id
      ) {
        this.chatMessages.push(msg)
      }
    })
  }

  setChatRequest(request, sender) {
    this.chatRequest = request
    this.setChatMessage(request, sender)
  }

  volunteerToRequest(request) {
    const reciever = Variables.users.find(
      (object) => request.user_id === object.id
    )
    this.sender = reciever
    this.setChatRequest(request, reciever)
  }

  clearChatMessages() {
    this.chatMessages = []
  }

  clear() {
    this.senderRequest = []
    this.clearChatMessages()
  }

  newMessage(msg) {
    const id = this.allMessage.length + 1
    const message = {
      id,
      ...msg,
    }

    this.allMessage.push(message)
  }
}

export default ChatStore
