/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { AuthToken } from "utils"

const propTypes = {
  component: PropTypes.func.isRequired,
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthToken.loggedIn() ? <Component {...props} /> : <Redirect to="/auth" />
    }
  />
)

PrivateRoute.propTypes = propTypes

export default PrivateRoute
