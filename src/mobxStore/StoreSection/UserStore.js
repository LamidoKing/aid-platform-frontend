import { makeAutoObservable, runInAction } from "mobx"
import { AuthToken } from "utils"

class UserStore {
  users = [
    {
      id: 1,
      first_name: "lamido",
      last_name: "tijjani",
      email: "lamido@gmail.com",
    },
    {
      id: 2,
      first_name: "Alex",
      last_name: "Nicholos",
      email: "alex@gmail.com",
    },
  ]

  error = {}

  currentUser = {}

  constructor() {
    makeAutoObservable(this)
    this.currentUser = AuthToken.getToken() || {}
  }

  setCurrentUser() {
    this.currentUser = AuthToken.getToken()
  }

  clearError() {
    this.error = {}
  }

  logIn(data) {
    const user = this.users.find(({ email }) => email === data.email)
    if (user === undefined) {
      runInAction(() => {
        this.error = {
          message: "Email or Password is not Correct",
          status: "error",
        }
      })

      return ""
    }
    runInAction(() => {
      AuthToken.setToken(user)
      this.setCurrentUser()
    })
    this.clearError()
    return ""
  }

  signUp(data) {
    const user = this.users.find(({ email }) => email === data.email)
    if (user !== undefined) {
      runInAction(() => {
        this.error = {
          message: "Email is already been Taken",
          status: "error",
        }
      })

      return ""
    }

    runInAction(() => {
      this.users.push(data)
      AuthToken.setToken(data)
      this.setCurrentUser()
    })
    this.clearError()
    return ""
  }
}

export default UserStore
