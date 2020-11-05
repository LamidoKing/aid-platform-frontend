import React from "react"
import { useHistory } from "react-router-dom"
import { AuthToken } from "utils"
import { useForm } from "hooks"
import AuthForm from "./AuthForm"

const LogIn = () => {
  const history = useHistory()
  const initialState = { email: undefined, password: undefined }

  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleLogin = () => {
    if (isnoEmpathyValue) {
      AuthToken.setToken("sgfhgsdhgfygfygshgf")
      history.push("/pages")
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleLogin()
    }
  }
  return (
    <>
      <AuthForm
        values={values}
        handleChange={handleChange}
        handleSummit={handleLogin}
        disableButton={!isnoEmpathyValue}
        handleKeyPress={handleKeyPress}
      />
    </>
  )
}

export default LogIn
