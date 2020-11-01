import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div>Home doesnot Need Auth</div>
      <Link to="/auth/signup" variant="body2">
        Already have an account? SignUp
      </Link>
    </div>
  )
}

export default Home
