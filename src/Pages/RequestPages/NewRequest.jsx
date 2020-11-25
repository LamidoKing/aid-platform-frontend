import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import { useForm, useStores } from "hooks"
import Container from "@material-ui/core/Container"
import Dialog from "Components/Dialog/Dialog"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import Form from "./Sections/NewReaquestForm"

const NewRequest = observer(() => {
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

  const handleSummit = () => {
    if (isnoEmpathyValue) {
      const inputs = {
        id: requeststore.requests.length + 1,
        ...values,
        latitude: mapstore.latitude,
        longitude: mapstore.longitude,
        status: "Unfulfill",
      }
      requeststore.addRequest(inputs)
      mapstore.clearClikedLocation()
      mapstore.setDragle(false)
      history.push("/pages/requests")
      appstore.showGuidePanel()
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

  return (
    <>
      <Container>
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
