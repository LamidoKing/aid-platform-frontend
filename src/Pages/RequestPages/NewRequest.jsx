/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import { useForm, useStores } from "hooks"
import Container from "@material-ui/core/Container"
import Dialog from "Components/Dialog/Dialog"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import Notification from "Components/Notification/Notifications"
import Loading from "Components/Loading/Loading"
import Form from "./Sections/NewReaquestForm"

const NewRequest = observer(() => {
  const [open, setOpen] = useState(false)
  const [isloding, seIsloding] = useState(false)
  const { appstore, mapstore, requeststore } = useStores()
  const [message] = useState(
    "Navigate the map and Right Click on the Location or point where help is needed, do want to continue"
  )
  const [title] = useState("New Help Request Location")
  const history = useHistory()
  const initialState = {
    title: undefined,
    description: undefined,
    type_of_request: undefined,
  }

  const { values, isnoEmpathyValue, handleChange } = useForm({ initialState })

  const handleCloseNotification = () => {
    setOpen(false)
  }

  const handleSummit = () => {
    if (isnoEmpathyValue) {
      const inputs = {
        ...values,
        latitude: mapstore.latitude,
        longitude: mapstore.longitude,
        status: "Unfulfill",
      }
      requeststore.addRequest(inputs)
    }
  }

  const handleKeyPress = (event) => {
    event.preventDefault()
    if (event.key === "Enter") {
      handleSummit()
    }
  }

  const handleNext = () => {
    appstore.hideGuidePanel()
    appstore.showOnlyMap()
  }

  const handleClose = () => {
    history.push("/pages")
  }

  const handleChangeLocation = () => {
    mapstore.setDragle(true)
    appstore.showOnlyMap()
  }

  useEffect(() => {
    if (requeststore.status === "fetching") {
      seIsloding(true)
    }
    if (requeststore.status === "success") {
      seIsloding(false)
      mapstore.clearClikedLocation()
      mapstore.setDragle(false)
      requeststore.setRequests()
      requeststore.clearStatus()
      history.push("/pages/requests")
      appstore.showGuidePanel()
    }
    if (requeststore.status === "error") {
      seIsloding(false)
      setOpen(true)
      requeststore.clearStatus()
    }
  }, [requeststore, requeststore.status, appstore, mapstore, history])

  return (
    <>
      <Container>
        <Loading open={isloding} />
        <Notification
          open={open}
          message={requeststore.error.message}
          handleCloseNotification={handleCloseNotification}
        />
        <Dialog
          message={message}
          title={title}
          open={appstore.requestGuidePanel}
          handleClose={handleClose}
          handleOkButton={handleNext}
        />
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={4}>
            <Form
              values={values}
              location={mapstore}
              handleChange={handleChange}
              handleSummit={handleSummit}
              disableButton={!isnoEmpathyValue}
              handleKeyPress={handleKeyPress}
              handleChangeLocation={handleChangeLocation}
            />
          </GridItem>
        </GridContainer>
      </Container>
    </>
  )
})

export default NewRequest
