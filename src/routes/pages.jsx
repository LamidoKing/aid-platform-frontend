import { Page1, Page2 } from "Pages/TestPages"

const pagesRoutes = [
  { path: "/pages/page1", component: Page1 },
  { path: "/pages/page2", component: Page2 },
  { redirect: true, path: "/pages", pathTo: "/pages/page1" },
]

export default pagesRoutes
