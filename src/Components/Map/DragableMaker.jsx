import React from "react"
import { Marker } from "@react-google-maps/api"
import { observer } from "mobx-react-lite"
import { useStores } from "hooks"

const DragableMaker = observer(() => {
  const { mapstore, appstore } = useStores()

  const handleDragEnd = (e) => {
    const location = {
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
    }
    mapstore.setClickeLocation(location)
    appstore.showMapPages()
    mapstore.setDragle(false)
  }

  return (
    <>
      <Marker
        draggable
        title="New Request"
        position={{
          lat: mapstore.latitude,
          lng: mapstore.longitude,
        }}
        onDragEnd={handleDragEnd}
      />
    </>
  )
})

export default DragableMaker
