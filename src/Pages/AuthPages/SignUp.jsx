import React from "react"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import AuthForm from "./AuthForm"

const SignUp = observer(() => {
  const history = useHistory()
  const { userStore } = useStores()
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

      values.id = userStore.users.length + 1
      userStore.signUp(values)
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
})

export default SignUp
