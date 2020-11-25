import { makeAutoObservable, autorun } from "mobx"
import { Variables } from "utils"

class RequestStore {
  currentUser = {}

  requests = []

  request = {}

  myRequests = []

  filtedRequests = []

  volunteer = []

  constructor(userStore) {
    makeAutoObservable(this)
    this.requests = Variables.requests
    autorun(() => {
      this.currentUser = userStore.currentUser
      this.myRequests = this.filterMyRequest
      this.filtedRequests = this.filterMyRequest
      this.volunteer = this.volunteered
    })
  }

  setCurrentUser(currentUser) {
    this.currentUser = currentUser
  }

  get filterMyRequest() {
    const filtedRequests = this.requests.filter(
      (request) => request.user_id === this.currentUser.id
    )
    return filtedRequests
  }

  get volunteered() {
    const request = this.requests.filter((req) => {
      return req.volunters.find((val) => val.user_id === this.currentUser.id)
    })
    return request
  }

  addRequest(request) {
    request.user_id = this.currentUser.id
    request.volunters = []
    this.requests.push(request)
  }

  removeRequest(request) {
    this.requests.splice(this.requests.indexOf(request), 1)
  }

  updateRequest(request) {
    request.volunters = []
    request.user_id = this.currentUser.id
    const requestIndex = this.requests.findIndex((req) => req.id === request.id)

    this.requests[requestIndex] = request
  }

  setAsFulfilled(request) {
    const requestIndex = this.requests.findIndex((req) => req.id === request.id)
    this.requests[requestIndex] = { ...request, status: "Fulfilled" }
  }

  filterByStatus(status) {
    this.filtedRequests = this.myRequests.filter(
      (request) => request.status === status
    )
  }

  setRequest(request) {
    this.request = request
  }

  clearRequest() {
    this.request = {}
  }

  volunteerToRequest(request) {
    const volunterData = {
      name: `${this.currentUser.first_name} ${this.currentUser.last_name}`,
      user_id: this.currentUser.id,
    }
    request.volunters.push(volunterData)
    const requestIndex = this.requests.findIndex((req) => req.id === request.id)

    this.requests[requestIndex] = request
  }

  filterVolunteerByStatus(status) {
    this.filtedRequests = this.volunteer.filter(
      (request) => request.status === status
    )
  }
}

export default RequestStore
