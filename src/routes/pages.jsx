import { NewRequest, Requests } from "Pages/RequestPages"
import Chat from "Pages/Chat/Chat"
import Stats from "Pages/Stats/Stats"

const pagesRoutes = [
  { path: "/pages/newrequest", component: NewRequest },
  { path: "/pages/requests", component: Requests },
  { path: "/pages/chat", component: Chat },
  { path: "/pages/stats", component: Stats },
  { redirect: true, path: "/pages", pathTo: "/pages/requests" },
]

export default pagesRoutes
