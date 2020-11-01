import React from "react"
import { Link, useHistory } from "react-router-dom"
import { AuthToken } from "utils"

const SignUp = () => {
  const history = useHistory()

  const handleSignUp = () => {
    AuthToken.setToken("sgfhgsdhgfygfygshgf")
    history.push("/pages")
  }
  return (
    <div>
      <div>SignUp Pages</div>
      <button type="button" onClick={handleSignUp}>
        SignUp
      </button>
      <div>
        <Link to="/auth/login" variant="body2">
          Already have an account? Login
        </Link>
      </div>
    </div>
  )
}

export default SignUp
