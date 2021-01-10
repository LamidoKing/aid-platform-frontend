/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  useMapEvent,
  useMap,
  Marker,
} from "react-leaflet"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"
import { AuthToken } from "utils"
import mapStyles from "styles/components/mapStyles"
import MakerDetails from "./MakerDetails"
import Markers from "./Markers"
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

const Map2 = observer((props) => {
  const classes = mapStyles()
  const { children, handleMapClick, handleMakerClick } = props
  const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 })
  const { mapstore, requeststore } = useStores()

  const RightClick = () => {
    useMapEvent("contextmenu", (e) => {
      handleMapClick(e)
    })
    return null
  }

  const ZoomToLocation = () => {
    const map = useMap()

    map.locate()

    useMapEvents({
      locationfound(e) {
        map.setZoom(4)
        setUserLocation(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return null
  }

  const placeDragableMaker = () => {
    if (mapstore.dragable === true) {
      return true
    }
    return false
  }

  useEffect(() => {
    requeststore.setRequests()
  }, [requeststore])
  return (
    <MapContainer
      center={userLocation}
      zoom={2}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {AuthToken.getToken("USER") && <ZoomToLocation />}
      <RightClick />
      <Markers handleMakerClick={handleMakerClick} />

      <MakerDetails />

      {placeDragableMaker() && <DragableMaker />}
      <div className={classes.children}>{children}</div>
    </MapContainer>
  )
})

Map2.propTypes = propTypes
Map2.defaultProps = defaultProps
export default Map2
