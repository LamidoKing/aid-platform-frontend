import React, { useRef } from "react"
import { Marker, Popup } from "react-leaflet"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"

const DragableMaker2 = observer(() => {
  const { mapstore, appstore } = useStores()

  const markerRef = useRef(null)

  const handleDragEnd = () => {
    const marker = markerRef.current

    if (marker != null) {
      const { lat, lng } = marker.getLatLng()

      const location = {
        latitude: lat,
        longitude: lng,
      }
      mapstore.setClickeLocation(location)
      appstore.showMapPages()
      mapstore.setDragle(false)
    }
  }

  return (
    <Marker
      draggable
      ref={markerRef}
      eventHandlers={{
        dragend: handleDragEnd,
      }}
      position={[mapstore.latitude, mapstore.longitude]}
    >
      <Popup minWidth={90}>
        <span>New Request</span>
      </Popup>
    </Marker>
  )
})

export default DragableMaker2
