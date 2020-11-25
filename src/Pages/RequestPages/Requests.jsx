import React from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import Container from "@material-ui/core/Container"
import Panel from "Components/Panel/Panel"
import EditRequest from "./EditRequest"

const Requests = observer(() => {
  const { appstore, requeststore, userStore } = useStores()

  const handleRepublish = () => {}

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

  return (
    <Container>
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
