import React from "react"
import { observer } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import Button from "@material-ui/core/Button"
// Hooks
import { useStores } from "hooks"
// "@material-ui Components
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Typography from "@material-ui/core/Typography"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import DrawerList from "Components/List/List"
// Components
import Dialog from "Components/Dialog/Dialog"
// Styles
import makerDetailStyles from "styles/components/makerDetailStyles"

const MakerDetails = observer(() => {
  const classes = makerDetailStyles()
  const history = useHistory()
  const { appstore, mapstore, requeststore, userStore, chatStore } = useStores()
  const { request } = requeststore

  const handleClose = () => {
    mapstore.closeDetails()
  }

  const handleVolunteer = (user, req) => {
    requeststore.volunteerToRequest(request)
    chatStore.volunteerToRequest(req)

    appstore.handlechatWithMoreRequest(false)
    handleClose()
    appstore.showMapPages()
    history.push("/pages/chat")
  }

  const handleClickVolunter = () => {
    handleClose()
    appstore.showMapPages()
    history.push("/pages/chat")
  }

  return (
    <>
      <Dialog
        open={mapstore.openMakerDetail}
        handleClose={handleClose}
        Component={
          <>
            <DialogTitle id="alert-dialog-title" className={classes.title}>
              {request.title}
            </DialogTitle>
            <DialogContent dividers className={classes.content}>
              <DialogContentText
                id="alert-dialog-description"
                className={classes.description}
              >
                {request.description}
              </DialogContentText>
              <Typography variant="h6" className={classes.title}>
                Type Of Request:{" "}
                <span className={classes.white}>{request.type_of_request}</span>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Status: <span className={classes.white}>{request.status}</span>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Latitude:{" "}
                <span className={classes.white}>{request.latitude}</span>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Longitude:{" "}
                <span className={classes.white}>{request.longitude}</span>
              </Typography>
              {userStore.currentUser.id === request.user_id && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <DrawerList
                    title="Volunters"
                    titleIcon={PeopleAltIcon}
                    itemList={request.volunters}
                    handleItemClick={handleClickVolunter}
                  />
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Back
              </Button>
              {userStore.currentUser.id !== request.user_id && (
                <Button
                  onClick={() =>
                    handleVolunteer(userStore.currentUser, request)
                  }
                  color="primary"
                  autoFocus
                >
                  Volunteer
                </Button>
              )}
            </DialogActions>
          </>
        }
      />
    </>
  )
})

export default MakerDetails
