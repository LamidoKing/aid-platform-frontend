import { createContext } from "react"
import consumer from "./consumer"

const CableApp = consumer

const actionCableContext = createContext(CableApp)
const ActionCableProvider = actionCableContext.Provider
export { CableApp, actionCableContext, ActionCableProvider }
