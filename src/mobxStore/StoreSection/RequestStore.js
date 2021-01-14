import { makeAutoObservable, autorun, runInAction } from "mobx"
import { Fetch, Urls } from "utils"

class RequestStore {
  currentUser = {}

  requests = []

  request = {}

  myRequests = []

  filtedRequests = []

  volunteer = []

  status = "idle"

  error = {}

  requestFilter

  constructor(userStore) {
    makeAutoObservable(this)
    this.currentUser = userStore.currentUser
    autorun(() => {
      this.setMyrequest(this.filterMyRequest)
      this.volunteer = this.volunteered
    })
  }

  setCurrentUser(currentUser) {
    this.currentUser = currentUser
  }

  setMyrequest = (requests) => {
    runInAction(() => {
      this.myRequests = requests
    })
  }

  get filterMyRequest() {
    const filtedRequests = this.requests.filter(
      (request) => request.user.id === this.currentUser.id
    )
    runInAction(() => {
      this.filtedRequests = filtedRequests
    })
    return filtedRequests
  }

  get volunteered() {
    const request = this.requests.filter((req) => {
      return req.volunters.find((val) => val.user.id === this.currentUser.id)
    })
    return request
  }

  addRequest = async (request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.post(`${Urls.api}/requests`, { request })

      this.resolve(response, 201)
    } catch (error) {
      this.reject(error)
    }
  }

  removeRequest = async (request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.del(`${Urls.api}/requests/${request.id}`)

      this.resolve(response, 204)
    } catch (error) {
      this.reject(error)
    }
  }

  updateRequest = async (id, request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.patch(`${Urls.api}/requests/${id}`, {
        request,
      })
      this.resolve(response, 200)
    } catch (error) {
      this.reject(error)
    }
  }

  setAsFulfilled = async (request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.patch(
        `${Urls.api}/fulfill_request/${request.id}`,
        { request: { status: "Fulfilled" } }
      )
      this.resolve(response, 200)
    } catch (error) {
      this.reject(error)
    }
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

  volunteerToRequest = async (request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.post(`${Urls.api}/volunters`, {
        volunter: { request_id: request.id },
      })

      this.resolve(response, 201)
    } catch (error) {
      this.reject(error)
    }
  }

  republishRequest = async (request) => {
    this.status = "fetching"
    try {
      const response = await Fetch.patch(
        `${Urls.api}/requests/republish/${request.id}`,
        { request: { republished: "true" } }
      )
      this.resolve(response, 200)
    } catch (error) {
      this.reject(error)
    }
  }

  filterVolunteerByStatus(status) {
    this.filtedRequests = this.volunteer.filter(
      (request) => request.status === status
    )
  }

  setRequests = async () => {
    try {
      const response = await Fetch.get(`${Urls.api}/requests`)
      if (response.status === 200) {
        runInAction(() => {
          this.requests = response.data
        })
      }
    } catch (error) {
      runInAction(() => {
        this.error = error.response ? error.response.data : error
      })
    }
  }

  clearStatus = () => {
    this.status = "idle"
  }

  resolve = (response, status) => {
    if (response.status === status) {
      runInAction(() => {
        this.status = "success"
      })
    }
  }

  reject = (error) => {
    runInAction(() => {
      this.status = "error"
      this.error = error.response ? error.response.data : error
    })
  }

  setRequestFilter = (filter) => {
    this.requestFilter = filter
  }
}

export default RequestStore
