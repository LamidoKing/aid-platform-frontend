import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
// @material-ui Components
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
// @material-ui Icons
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
// Core Components
import FileInput from "Components/Input/FileInput"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import Input from "Components/Input/Input"
// Styles
import authFormStyles from "styles/pages/authFormStyles"

const propTypes = {
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  fileName: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  signUp: PropTypes.bool,
  disableButton: PropTypes.bool,
  handleSummit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
}

const defaultProps = {
  signUp: undefined,
  fileName: undefined,
  disableButton: false,
}

const AuthForm = (props) => {
  const classes = authFormStyles()
  const {
    signUp,
    values,
    fileName,
    disableButton,
    handleChange,
    handleSummit,
    handleKeyPress,
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const input = signUp ? classes.inputsignUP : classes.inputLogin

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <form noValidate autoComplete="off">
              <Typography className={classes.title} variant="h5">
                {signUp ? "SignUp" : "LogIn"}
              </Typography>
              <div className={input}>
                <Input
                  id="email"
                  label="Email"
                  value={values.email || ""}
                  error={values.email === ""}
                  required={values.email === ""}
                  handleChange={handleChange("email")}
                />
              </div>
              <div className={input}>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  value={values.password || ""}
                  error={values.password === ""}
                  required={values.password === ""}
                  handleChange={handleChange("password")}
                  adornment={
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      style={{ color: "white" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                />
              </div>
              {signUp && (
                <>
                  <div className={input}>
                    <Input
                      id="firstName"
                      label="First Name"
                      value={values.first_name || ""}
                      error={values.first_name === ""}
                      required={values.first_name === ""}
                      handleChange={handleChange("first_name")}
                    />
                  </div>
                  <div className={input}>
                    <Input
                      id="lastName"
                      label="Last Name"
                      value={values.last_name || ""}
                      error={values.last_name === ""}
                      required={values.last_name === ""}
                      handleChange={handleChange("last_name")}
                    />
                  </div>
                  <div className={input}>
                    <FileInput
                      label="Government Id"
                      fileName={fileName}
                      handleChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div className={classes.buttonCenter}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  disabled={disableButton}
                  onClick={handleSummit}
                  onKeyPress={handleKeyPress}
                >
                  {signUp ? "SignUp" : "LogIn"}
                </Button>
              </div>
              <div>
                <Typography className={classes.fot}>
                  Dont have an account?{" "}
                  <Link
                    to={signUp ? "/auth/login" : "/auth/signup"}
                    variant="body2"
                    className={classes.fot}
                  >
                    {signUp ? "LogIn" : "SignUp"}
                  </Link>
                </Typography>
              </div>
            </form>
          </Paper>
        </GridItem>
      </GridContainer>
    </Container>
  )
}

AuthForm.propTypes = propTypes
AuthForm.defaultProps = defaultProps

export default AuthForm
