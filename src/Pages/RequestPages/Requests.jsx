import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import Container from "@material-ui/core/Container"
import Panel from "Components/Panel/Panel"
import Notification from "Components/Notification/Notifications"
import EditRequest from "./EditRequest"

const Requests = observer(() => {
  const [open, setOpen] = useState(false)
  const { appstore, requeststore, userStore } = useStores()

  const handleRepublish = () => {}

  const handleCloseNotification = () => {
    setOpen(false)
  }

  const handleFulfilled = (request) => {
    requeststore.setAsFulfilled(request)
    requeststore.filterByStatus("Fulfilled")
  }

  const handleEdit = (request) => {
    requeststore.setRequest(request)
    appstore.showEditDialog()
  }

  const handleDelete = (request) => {
    requeststore.removeRequest(request)
  }

  useEffect(() => {
    if (requeststore.status === "success") {
      requeststore.clearStatus()
      requeststore.setRequests()
    }
    if (requeststore.status === "error") {
      setOpen(true)
      requeststore.clearStatus()
    }
  }, [requeststore, requeststore.status])

  return (
    <Container>
      <Notification
        open={open}
        message={requeststore.error.message}
        handleCloseNotification={handleCloseNotification}
      />
      {requeststore.request.id && <EditRequest />}
      <Panel
        requests={requeststore.filtedRequests}
        currentUser={userStore.currentUser}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleFulfilled={handleFulfilled}
        handleRepublish={handleRepublish}
      />
    </Container>
  )
})

export default Requests
