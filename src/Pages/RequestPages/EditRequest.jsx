import React from "react"
import { observer } from "mobx-react-lite"
import { useForm, useStores } from "hooks"
import Dialog from "Components/Dialog/Dialog"
import Form from "./Sections/NewReaquestForm"

const EditRequest = observer(() => {
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

  const handleClose = () => {
    appstore.hideEditDialog()
    requeststore.clearRequest()
    mapstore.setDragle(false)
  }

  const handleEdit = () => {
    if (isnoEmpathyValue) {
      const inputs = {
        id: request.id,
        ...values,
        latitude: location.latitude,
        longitude: location.longitude,
        status: "Unfulfill",
      }
      requeststore.updateRequest(inputs)
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
  return (
    <>
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
