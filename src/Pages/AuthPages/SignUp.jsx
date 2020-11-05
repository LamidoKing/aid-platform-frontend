import React from "react"
import { useHistory } from "react-router-dom"
import { AuthToken } from "utils"
import { useForm } from "hooks"
import AuthForm from "./AuthForm"

const SignUp = () => {
  const history = useHistory()
  const initialState = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
  }

  const { values, file, fileName, isnoEmpathyValue, handleChange } = useForm({
    initialState,
  })

  const isOkToSummit = () => {
    if (isnoEmpathyValue && file !== undefined) {
      return true
    }
    return false
  }

  const handleSignUp = () => {
    if (isOkToSummit()) {
      const formdata = new FormData()

      formdata.append("user[government_id]", file)

      const valuesKeys = Object.keys(values)

      valuesKeys.map((key) => {
        return formdata.append(`user[${key}]`, values[key])
      })

      AuthToken.setToken("sgfhgsdhgfygfygshgf")
      history.push("/pages")
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleSignUp()
    }
  }

  return (
    <>
      <AuthForm
        signUp
        values={values}
        fileName={fileName}
        disableButton={!isOkToSummit()}
        handleChange={handleChange}
        handleSummit={handleSignUp}
        handleKeyPress={handleKeyPress}
      />
    </>
  )
}

export default SignUp
