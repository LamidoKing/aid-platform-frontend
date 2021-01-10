import React from "react"
import PropTypes from "prop-types"
import { Marker } from "react-leaflet"
import { icon } from "leaflet"
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

  const computeIcon = (image) =>
    icon({
      iconRetinaUrl: image,
      iconUrl: image,
    })

  const makerIcon = (request) => {
    if (userStore.currentUser.id === request.user.id) {
      return request.type_of_request === "Material Need"
        ? computeIcon(marker3)
        : computeIcon(marker4)
    }
    return request.type_of_request === "Material Need"
      ? computeIcon(marker1)
      : computeIcon(marker2)
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
            position={[request.latitude, request.longitude]}
            icon={makerIcon(request)}
            eventHandlers={{
              click: () => {
                handleMakerClick(request)
              },
            }}
          />
        )
      })}
    </>
  )
})

Markers.propTypes = propTypes
Markers.defaultProps = defaultProps

export default Markers
