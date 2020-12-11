/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Paper from "@material-ui/core/Paper"
import Draggable from "react-draggable"

const DraggableComponents = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

export default DraggableComponents
