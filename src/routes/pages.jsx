import { Page1, Page2 } from "Pages/TestPages"
import { NewRequest, Requests } from "Pages/RequestPages"
import Chat from "Pages/Chat/Chat"

const pagesRoutes = [
  { path: "/pages/page1", component: Page1 },
  { path: "/pages/page2", component: Page2 },
  { path: "/pages/newrequest", component: NewRequest },
  { path: "/pages/requests", component: Requests },
  { path: "/pages/chat", component: Chat },
  { redirect: true, path: "/pages", pathTo: "/pages/requests" },
]

export default pagesRoutes
