import { makeAutoObservable, autorun, when, runInAction } from "mobx"
import { Variables, Fetch, Urls } from "utils"

class ChatStore {
  messages = []

  chats = []

  senderRequest = []

  requestVolunterByMe = []

  sender = {}

  chatMessages = []

  chatRequest = {}

  status = "idle"

  error = {}

  constructor(userStore) {
    makeAutoObservable(this)
    this.currentUser = userStore.currentUser

    autorun(() => {
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

  setuserChats() {
    this.chats = this.userChats
  }

  get userChats() {
    const chats = []

    this.messages.forEach((m) => {
      if (
        chats.find((object) => object.id === m.sender.id) === undefined &&
        m.receiver.id === this.currentUser.id
      ) {
        chats.push(m.sender)
      }
    })

    return chats
  }

  setSenderRequest(sender, req) {
    const isDuplicatete = (requests, request) =>
      requests.find((object) => object.id === request.id) === undefined

    const requests = []
    req.forEach((request) => {
      request.volunters.forEach((volunter) => {
        if (
          (volunter.user.id === sender.id &&
            request.user.id === this.currentUser.id) ||
          (volunter.user.id === this.currentUser.id &&
            request.user.id === sender.id)
        ) {
          if (isDuplicatete(requests, request)) {
            requests.push(request)
          }
        }
      })
    })
    this.senderRequest = requests
    this.sender = sender
  }

  setChatMessage(request, sender) {
    this.clearChatMessages()
    this.messages.forEach((msg) => {
      if (
        (msg.sender.id === sender.id ||
          msg.sender.id === this.currentUser.id) &&
        (msg.receiver.id === sender.id ||
          msg.receiver.id === this.currentUser.id) &&
        msg.request.id === request.id
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

  newMessage = async (message) => {
    this.status = "fetching"
    try {
      const response = await Fetch.post(`${Urls.api}/messages`, {
        message,
      })
      if (response.status === 201) {
        runInAction(() => {
          this.status = "success"
        })
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error"
        this.error = error.response ? error.response.data : error
      })
    }
  }

  liveChat = (message) => {
    if (this.chatRequest.id === message.request.id) {
      this.chatMessages.push(message)
    }
  }

  getMessage = async () => {
    try {
      const response = await Fetch.get(`${Urls.api}/messages`)
      if (response.status === 200) {
        runInAction(() => {
          this.messages = response.data
        })
      }
    } catch (error) {
      runInAction(() => {
        this.error = error.response ? error.response.data : error
      })
    }
  }
}

export default ChatStore
