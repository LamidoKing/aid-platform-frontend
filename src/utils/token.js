const setToken = (name, idToken) => {
  const now = new Date()

  const token = {
    token: idToken,
    expiry: now.getTime() + 86400000,
  }

  localStorage.setItem(name, JSON.stringify(token))
}

const getToken = (name) => {
  const appToken = localStorage.getItem(name)

  if (!appToken) {
    return null
  }

  const { expiry, token } = JSON.parse(appToken)
  const now = new Date()

  if (now.getTime() > expiry) {
    localStorage.removeItem(name)
    return null
  }

  return token
}

const loggedIn = () => {
  const token = getToken("TOKEN")
  return !!token
}

const logout = () => {
  localStorage.removeItem("TOKEN")
}

export { loggedIn, setToken, getToken, logout }
