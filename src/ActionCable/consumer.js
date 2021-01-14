// app/javascript/channels/consumer.js
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

import { createConsumer } from "@rails/actioncable"
import { AuthToken, Urls } from "utils"

const id = AuthToken.getToken("USER") && AuthToken.getToken("USER").id

export default createConsumer(`${Urls.cableUrl}?user=${id}`)
