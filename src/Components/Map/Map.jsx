import React, { memo, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import Loading from "Components/Loading/Loading"
import { Variables } from "utils"

const propTypes = {
  children: PropTypes.element.isRequired,
}

const containerStyle = {
  width: "100%",
  height: "100vh",
  zIndex: 111,
}

const Map = (props) => {
  const { children } = props
  const [userLocation, setUserLocation] = useState({})
  const [open, setopen] = useState(true)
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  }, [])

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
        >
          <Marker position={userLocation} />
          <>{children}</>
        </GoogleMap>
      </LoadScript>
    </>
  )
}

Map.propTypes = propTypes

export default memo(Map)
