import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import { Variables } from "utils"
import Loading from "Components/Loading/Loading"
import Markers from "./Markers"
import MakerDetails from "./MakerDetails"
import DragableMaker from "./DragableMaker"

const propTypes = {
  children: PropTypes.element.isRequired,
  handleMapClick: PropTypes.func,
  handleMakerClick: PropTypes.func,
}

const defaultProps = {
  handleMapClick: () => {},
  handleMakerClick: () => {},
}

const containerStyle = {
  width: "100%",
  height: "100vh",
  zIndex: 111,
}

const Map = observer((props) => {
  const { children, handleMapClick, handleMakerClick } = props
  const [userLocation, setUserLocation] = useState({})
  const [open, setopen] = useState(true)
  const { mapstore, requeststore } = useStores()

  const handleOpen = () => {
    setopen(false)
  }

  const getPosition = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    setUserLocation(currentPosition)
  }
  const placeDragableMaker = () => {
    if (mapstore.dragable === true) {
      return true
    }
    return false
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  }, [])
  useEffect(() => {
    requeststore.setRequests()
  }, [requeststore])

  return (
    <>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAP_KEY}`}
        onLoad={handleOpen}
        loadingElement={<Loading open={open} />}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={10}
          options={Variables.mapOptions}
          onRightClick={handleMapClick}
        >
          <Markers handleMakerClick={handleMakerClick} />
          <MakerDetails />
          {placeDragableMaker() && <DragableMaker />}

          <>{children}</>
        </GoogleMap>
      </LoadScript>
    </>
  )
})

Map.propTypes = propTypes
Map.defaultProps = defaultProps

export default Map
