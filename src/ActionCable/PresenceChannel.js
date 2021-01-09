import consumer from "./consumer"

const PresenceChannel = () => {
  consumer.subscriptions.create({ channel: "PresenceChannel" }, {})
}

export default PresenceChannel
