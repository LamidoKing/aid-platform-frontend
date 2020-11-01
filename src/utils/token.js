const setToken = (idToken) => {
  const now = new Date()

  const token = {
    token: idToken,
    expiry: now.getTime() + 86400000,
  }

  localStorage.setItem("TOKEN", JSON.stringify(token))
}

const getToken = () => {
  const appToken = localStorage.getItem("TOKEN")

  if (!appToken) {
    return null
  }

  const { expiry, token } = JSON.parse(appToken)
  const now = new Date()

  if (now.getTime() > expiry) {
    localStorage.removeItem("TOKEN")
    return null
  }

  return token
}

const loggedIn = () => {
  const token = getToken()
  return !!token
}

const logout = () => {
  localStorage.removeItem("TOKEN")
}

export { loggedIn, setToken, getToken, logout }
