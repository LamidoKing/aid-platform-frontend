import Auth from "Layouts/Auth"
import Pages from "Layouts/Pages"
import Home from "Layouts/Home"

const indexRoutes = [
  { path: "/auth", component: Auth },
  { path: "/pages", type: "auth", component: Pages },
  { path: "/", component: Home },
]

export default indexRoutes
