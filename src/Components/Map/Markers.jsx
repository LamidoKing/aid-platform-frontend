import React from "react"
import PropTypes from "prop-types"
import { Marker } from "@react-google-maps/api"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import marker1 from "asserts/oneTime2.png"
import marker2 from "asserts/requst.png"
import marker3 from "asserts/myRequest.png"
import marker4 from "asserts/myRequest2.png"

const defaultProps = {
  handleMakerClick: () => {},
}

const propTypes = {
  handleMakerClick: PropTypes.func,
}

const Markers = observer((props) => {
  const { handleMakerClick } = props
  const { requeststore, userStore } = useStores()
  const { requests } = requeststore

  const makerIcon = (request) => {
    if (userStore.currentUser.id === request.user.id) {
      return request.type_of_request === "Material Need" ? marker3 : marker4
    }
    return request.type_of_request === "Material Need" ? marker1 : marker2
  }

  const hasMaxVolunters = (request) => {
    if (
      request.volunters.length > 4 &&
      userStore.currentUser.id !== request.user.id
    ) {
      return true
    }
    return false
  }
  const isFulfill = (request) => {
    if (
      request.status === "Fulfilled" &&
      userStore.currentUser.id !== request.user.id
    ) {
      return true
    }
    return false
  }

  return (
    <>
      {requests.map((request) => {
        if (isFulfill(request) || hasMaxVolunters(request)) return ""
        return (
          <Marker
            key={request.id}
            title={request.type_of_request}
            icon={makerIcon(request)}
            position={{
              lat: request.latitude,
              lng: request.longitude,
            }}
            onClick={() => handleMakerClick(request)}
          />
        )
      })}
    </>
  )
})

Markers.propTypes = propTypes
Markers.defaultProps = defaultProps

export default Markers
