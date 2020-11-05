import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import authRoutes from "routes/auth"
import authStyles from "styles/layouts/authStyles"

const Auth = () => {
  const classes = authStyles()
  return (
    <div className={classes.root}>
      <Switch>
        {authRoutes.map((prop) => {
          if (prop.redirect)
            return (
              <Redirect from={prop.path} to={prop.pathTo} key={prop.path} />
            )
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          )
        })}
      </Switch>
    </div>
  )
}

export default Auth
