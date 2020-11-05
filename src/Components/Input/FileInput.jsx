import React, { createRef } from "react"
import PropTypes from "prop-types"
// material-iu Icons
import AttachFile from "@material-ui/icons/AttachFile"
import IconButton from "@material-ui/core/IconButton"
// Coponents
import Input from "./Input"

const propTypes = {
  label: PropTypes.string,
  fileName: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

const defaultProps = {
  label: "file upload",
  fileName: undefined,
}

const FileInput = (props) => {
  const { label, handleChange, fileName } = props
  const hiddenFile = createRef()
  const onFocus = (e) => {
    hiddenFile.current.click(e)
  }
  return (
    <>
      <input
        type="file"
        ref={hiddenFile}
        style={{ display: "none" }}
        onChange={handleChange("file")}
      />
      <Input
        handleClick={onFocus}
        id="fileUpload"
        label={label}
        value={fileName}
        error={fileName === ""}
        required={fileName === ""}
        adornment={
          <IconButton size="small" style={{ color: "white" }}>
            <AttachFile />
          </IconButton>
        }
      />
    </>
  )
}

FileInput.propTypes = propTypes
FileInput.defaultProps = defaultProps

export default FileInput
