import React from "react"
import PropTypes from "prop-types"
// @material-ui Components
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/"
// @material-ui Icons
import MenuItem from "@material-ui/core/MenuItem"
// Core Components
import Input from "Components/Input/Input"
// Styles
import formStyles from "styles/pages/newRequestForm"

const propTypes = {
  editForm: PropTypes.bool,
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeLocation: PropTypes.func.isRequired,
  disableButton: PropTypes.bool,
  handleSummit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
}

const defaultProps = {
  disableButton: false,
  editForm: false,
  handleClose: () => {},
}

const AuthForm = (props) => {
  const classes = formStyles()
  const {
    values,
    editForm,
    location,
    disableButton,
    handleChange,
    handleChangeLocation,
    handleSummit,
    handleKeyPress,
    handleClose,
  } = props

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))

  const input = classes.inputLogin
  const lat = location.latitude.toString().slice(0, 5)
  const lng = location.longitude.toString().slice(0, 5)

  return (
    <Paper elevation={3} className={classes.paper}>
      <form noValidate autoComplete="off">
        <Typography className={classes.title} variant="h5">
          {editForm ? "Edit Help Request" : "New Help Request Details"}
        </Typography>
        <Typography className={classes.location} variant="subtitle1">
          {`Latitude: ${lat} Longitude: ${lng}`}
        </Typography>
        <div className={classes.buttonCenter}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={handleChangeLocation}
          >
            change
          </Button>
        </div>
        <div className={input}>
          <Input
            id="title"
            label="Title"
            value={values.title || ""}
            error={values.title === ""}
            required={values.title === ""}
            handleChange={handleChange("title")}
          />
        </div>
        <div className={input}>
          <Input
            id="description"
            label="Description"
            rows={3}
            multiline
            value={values.description || ""}
            error={values.description === ""}
            required={values.description === ""}
            handleChange={handleChange("description")}
          />
        </div>
        <div className={input}>
          <Input
            id="type of request"
            label="Type of Request"
            select
            value={values.type_of_request || ""}
            error={values.type_of_request === ""}
            required={values.type_of_request === ""}
            handleChange={handleChange("type_of_request")}
          >
            <MenuItem value="One Time Request">One Time Request</MenuItem>
            <MenuItem value="Material Need">Material Need</MenuItem>
          </Input>
        </div>
        <div className={classes.buttonCenter}>
          {editForm && fullScreen && (
            <Button
              color="primary"
              size="large"
              className={classes.cancelButton}
              disabled={disableButton}
              onClick={handleClose}
            >
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            disabled={disableButton}
            onClick={handleSummit}
            onKeyPress={handleKeyPress}
          >
            {editForm ? "Edit" : "Summit"}
          </Button>
        </div>
      </form>
    </Paper>
  )
}

AuthForm.propTypes = propTypes
AuthForm.defaultProps = defaultProps

export default AuthForm
