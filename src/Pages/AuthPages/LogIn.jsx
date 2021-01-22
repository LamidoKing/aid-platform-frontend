import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Notification from "Components/Notification/Notifications"
import Loading from "Components/Loading/Loading"
import AuthForm from "./AuthForm"

const LogIn = observer(() => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [isloding, seIsloding] = useState(false)
  const { userStore } = useStores()
  const initialState = { email: undefined, password: undefined }

  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleCloseNotification = () => {
    setOpen(false)
    userStore.clearError()
  }

  const handleLogin = () => {
    if (isnoEmpathyValue) {
      userStore.logIn({ user: { ...values } })
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleLogin()
    }
  }

  useEffect(() => {
    if (userStore.status === "fetching") {
      seIsloding(true)
    }
    if (userStore.status === "success") {
      seIsloding(false)
      history.push("/pages")
      history.go(0)
    }
    if (userStore.status === "error") {
      seIsloding(false)
      setOpen(true)
    }
  }, [history, userStore.status])

  return (
    <>
      <Loading open={isloding} />
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
