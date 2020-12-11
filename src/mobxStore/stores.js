import { createContext } from "react"
import {
  AppStore,
  MapStore,
  RequestStore,
  UserStore,
  ChatStore,
} from "./StoreSection"

const appstore = new AppStore()

const mapstore = new MapStore()

const userStore = new UserStore()

const requeststore = new RequestStore(userStore)

const chatStore = new ChatStore(userStore)

const stores = Object.freeze({
  appstore,
  mapstore,
  userStore,
  requeststore,
  chatStore,
})

const storesContext = createContext(stores)
const StoresProvider = storesContext.Provider

export { stores, storesContext, StoresProvider }
