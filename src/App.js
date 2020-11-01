import React from "react"
import { Switch, Route } from "react-router-dom"
import indexRoutes from "routes/index"
import PrivateRoutes from "routes/PrivateRoutes"

function App() {
  return (
    <Switch>
      {indexRoutes.map((prop) => {
        if (prop.type === "auth") {
          return (
            <PrivateRoutes
              path={prop.path}
              component={prop.component}
              key={prop.path}
            />
          )
        }
        return (
          <Route path={prop.path} component={prop.component} key={prop.path} />
        )
      })}
    </Switch>
  )
}

export default App
