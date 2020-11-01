import React from "react"
import { useHistory } from "react-router-dom"
import { AuthToken } from "utils"

const LogIn = () => {
  const history = useHistory()

  const handleLogin = () => {
    AuthToken.setToken("sgfhgsdhgfygfygshgf")
    history.push("/pages")
  }
  return (
    <div>
      <div>LogIn Pages</div>
      <button type="button" onClick={handleLogin}>
        login
      </button>
    </div>
  )
}

export default LogIn
