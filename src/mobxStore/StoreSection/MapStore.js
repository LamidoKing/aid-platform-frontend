import { makeAutoObservable } from "mobx"

class MapStore {
  latitude = ""

  longitude = ""

  openMakerDetail = false

  dragable = false

  constructor() {
    makeAutoObservable(this)
  }

  setClickeLocation(loc) {
    this.latitude = loc.latitude
    this.longitude = loc.longitude
  }

  clearClikedLocation() {
    this.latitude = ""
    this.longitude = ""
  }

  openDetail() {
    this.openMakerDetail = true
  }

  closeDetails() {
    this.openMakerDetail = false
  }

  setDragle(value) {
    this.dragable = value
  }
}

export default MapStore
