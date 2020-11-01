import { LogIn, SignUp } from "Pages/AuthPages"

const authRoutes = [
  { path: "/auth/signup", component: SignUp },
  { path: "/auth/login", component: LogIn },
  { redirect: true, path: "/auth", pathTo: "/auth/signup" },
]

export default authRoutes
