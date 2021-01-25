const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/v1"
    : "https://aid-platform-api.herokuapp.com/api/v1"

const cableURL =
  window.location.hostname === "localhost"
    ? "ws://localhost:3000/cable"
    : "wss://aid-platform-api.herokuapp.com/cable"

export { baseURL, cableURL }
