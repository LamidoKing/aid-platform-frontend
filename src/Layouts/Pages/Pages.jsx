import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import pagesRoutes from "routes/pages"
import { PresenceChannel } from "ActionCable"
import Dashbord from "./Dashbord"

const routes = (
  <Switch>
    {pagesRoutes.map((prop) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={prop.path} />
      return (
        <Route path={prop.path} component={prop.component} key={prop.path} />
      )
    })}
  </Switch>
)

const Pages = () => {
  PresenceChannel()
  return (
    <>
      <Dashbord>{routes}</Dashbord>
    </>
  )
}

export default Pages
