import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Notification from "Components/Notification/Notifications"
import Loading from "Components/Loading/Loading"
import AuthForm from "./AuthForm"

const SignUp = observer(() => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [isloding, seIsloding] = useState(false)
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

  const handleCloseNotification = () => {
    setOpen(false)
    userStore.clearError()
  }

  const isOkToSummit = () => {
    if (isnoEmpathyValue && file !== undefined) {
      return true
    }
    return false
  }

  const handleSignUp = () => {
    if (isOkToSummit()) {
      const formdata = new FormData()

      formdata.append("user[govnt_id]", file)

      values.status = "online"
      const valuesKeys = Object.keys(values)

      valuesKeys.map((key) => {
        return formdata.append(`user[${key}]`, values[key])
      })

      userStore.signUp(formdata)
      history.push("/pages")
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleSignUp()
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
      userStore.clearStatus()
    }
  }, [history, userStore, userStore.status])

  return (
    <>
      <Loading open={isloding} />
      <Notification
        open={open}
        message={userStore.error.message}
        handleCloseNotification={handleCloseNotification}
      />
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
