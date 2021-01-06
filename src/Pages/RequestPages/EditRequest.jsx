import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Dialog from "Components/Dialog/Dialog"
import Notification from "Components/Notification/Notifications"
import Loading from "Components/Loading/Loading"
import Form from "./Sections/NewReaquestForm"

const EditRequest = observer(() => {
  const [open, setOpen] = useState(false)
  const [isloding, setIsloding] = useState(false)
  const { appstore, mapstore, requeststore } = useStores()
  const { request } = requeststore

  const editRequestdata = request && {
    title: request.title,
    description: request.description,
    type_of_request: request.type_of_request,
  }

  const initialState = request
    ? editRequestdata
    : {
        title: undefined,
        description: undefined,
        type_of_request: undefined,
      }

  const location = {
    latitude: mapstore.latitude || request.latitude,
    longitude: mapstore.longitude || request.longitude,
  }
  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleCloseNotification = () => {
    setOpen(false)
  }

  const handleClose = () => {
    appstore.hideEditDialog()
  }

  const handleEdit = () => {
    if (isnoEmpathyValue) {
      const inputs = {
        ...values,
        latitude: location.latitude,
        longitude: location.longitude,
      }
      requeststore.updateRequest(request.id, inputs)
      handleClose()
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleEdit()
    }
  }

  const handleChangeLocation = () => {
    mapstore.setDragle(true)
    appstore.showOnlyMap()
  }

  useEffect(() => {
    if (requeststore.status === "fetching") {
      setIsloding(true)
    }
    if (requeststore.status === "success") {
      setIsloding(false)
      requeststore.setRequests()
      requeststore.clearStatus()
      requeststore.clearRequest()
      mapstore.setDragle(false)
    }
    if (requeststore.status === "error") {
      setIsloding(false)
      setOpen(true)
      requeststore.clearStatus()
    }
  }, [requeststore, requeststore.status, mapstore])

  return (
    <>
      <Loading open={isloding} />
      <Notification
        open={open}
        message={requeststore.error.message}
        handleCloseNotification={handleCloseNotification}
      />
      <Dialog
        open={appstore.editRequestDialog}
        handleClose={handleClose}
        Component={
          <Form
            editForm
            values={values}
            location={location}
            handleChange={handleChange}
            handleSummit={handleEdit}
            disableButton={!isnoEmpathyValue}
            handleKeyPress={handleKeyPress}
            handleChangeLocation={handleChangeLocation}
            handleClose={handleClose}
          />
        }
      />
    </>
  )
})

export default EditRequest
