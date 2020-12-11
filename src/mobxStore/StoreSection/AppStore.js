import { makeAutoObservable } from "mobx"

class AppStore {
  mapOnly = false

  requestGuidePanel = true

  editRequestDialog = false

  chatDialog = true

  chatWithMoreRequest = false

  constructor() {
    makeAutoObservable(this)
  }

  showOnlyMap() {
    this.mapOnly = true
  }

  showMapPages() {
    this.mapOnly = false
  }

  toggleOnlyMap() {
    this.mapOnly = !this.mapOnly
  }

  showGuidePanel() {
    this.requestGuidePanel = true
  }

  hideGuidePanel() {
    this.requestGuidePanel = false
  }

  showEditDialog() {
    this.editRequestDialog = true
  }

  hideEditDialog() {
    this.editRequestDialog = false
  }

  haandleChatDialog(value) {
    this.chatDialog = value
  }

  handlechatWithMoreRequest(value) {
    this.chatWithMoreRequest = value
  }
}

export default AppStore
