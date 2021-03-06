import { makeAutoObservable, runInAction } from "mobx"
import { AuthToken, Variables, Fetch } from "utils"

class UserStore {
  users = Variables.users

  error = {}

  currentUser = {}

  status = "idle"

  constructor() {
    makeAutoObservable(this)
    this.currentUser = AuthToken.getToken("USER") || {}
  }

  setCurrentUser() {
    this.currentUser = AuthToken.getToken("USER")
  }

  clearError() {
    this.error = {}
  }

  logIn = (data) => {
    this.fetchapi(data, "login")
  }

  signUp = (data) => {
    this.fetchapi(data, "signup")
  }

  fetchapi = async (data, type) => {
    const url = type === "login" ? `/auth/login` : `/auth/signup`

    const status = type === "login" ? 200 : 201

    this.status = "fetching"
    try {
      const response = await Fetch.post(url, data)
      if (response.status === status) {
        runInAction(() => {
          this.status = "success"
          AuthToken.setToken("TOKEN", response.data.token)
          AuthToken.setToken("USER", response.data.user)
          this.setCurrentUser()
          this.clearError()
        })
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error"
        this.error = error.response ? error.response.data : error
      })
    }
  }

  clearStatus = () => {
    this.status = "idle"
  }
}

export default UserStore
