import { createContext } from "react"
import { AppStore, MapStore, RequestStore, UserStore } from "./StoreSection"

const appstore = new AppStore()

const mapstore = new MapStore()

const userStore = new UserStore()

const requeststore = new RequestStore(userStore)

const stores = Object.freeze({
  appstore,
  mapstore,
  userStore,
  requeststore,
})

const storesContext = createContext(stores)
const StoresProvider = storesContext.Provider

export { stores, storesContext, StoresProvider }
