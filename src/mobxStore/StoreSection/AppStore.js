import { makeAutoObservable } from "mobx"

class AppStore {
  mapOnly = false

  requestGuidePanel = true

  editRequestDialog = false

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
}

export default AppStore
