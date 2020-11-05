import React from "react"
import PropTypes, { number, string } from "prop-types"
import { withStyles, TextField } from "@material-ui/core"

const defaultProps = {
  label: "",
  id: "",
  value: "",
  type: "string",
  error: false,
  required: false,
  adornment: <></>,
  handleChange: () => {},
  handleClick: () => {},
}

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([string, number]),
  error: PropTypes.bool,
  type: PropTypes.oneOfType([string, number]),
  required: PropTypes.bool,
  adornment: PropTypes.element,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#1FB6FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1FB6FF",
      },
    },
  },
})(TextField)

const Input = (props) => {
  const {
    label,
    id,
    value,
    error,
    type,
    required,
    adornment,
    handleChange,
    handleClick,
  } = props
  return (
    <>
      <CssTextField
        label={label}
        id={id}
        value={value}
        error={error}
        required={required}
        type={type}
        onChange={handleChange}
        onClick={handleClick}
        variant="outlined"
        margin="normal"
        fullWidth
        size="small"
        InputProps={{
          style: { color: "white" },
          endAdornment: adornment,
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
      />
    </>
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
