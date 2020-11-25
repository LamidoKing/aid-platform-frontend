import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Notification from "Components/Notification/Notifications"
import AuthForm from "./AuthForm"

const LogIn = observer(() => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const { userStore } = useStores()
  const initialState = { email: undefined, password: undefined }

  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleCloseNotification = () => {
    setOpen(false)
    userStore.clearError()
  }

  const handleLogin = () => {
    if (isnoEmpathyValue) {
      userStore.logIn(values)
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleLogin()
    }
  }
  useEffect(() => {
    if (userStore.currentUser.id) {
      history.push("/pages")
    }
    if (userStore.error.message) {
      setOpen(true)
    }
  }, [history, userStore.currentUser.id, userStore.error.message])

  return (
    <>
      <Notification
        open={open}
        message={userStore.error.message}
        handleCloseNotification={handleCloseNotification}
      />
      <AuthForm
        values={values}
        handleChange={handleChange}
        handleSummit={handleLogin}
        disableButton={!isnoEmpathyValue}
        handleKeyPress={handleKeyPress}
      />
    </>
  )
})

export default LogIn
