import axios from "axios"
import * as AuthToken from "./token"

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
})

instance.defaults.headers.common.Authorization = AuthToken.loggedIn()
  ? `Bearer ${AuthToken.getToken("TOKEN")}`
  : null

const get = async (url) => {
  const response = await instance({
    method: "GET",
    url,
  })

  return response
}

const post = async (url, data) => {
  const response = await instance({
    method: "POST",
    url,
    data,
  })

  return response
}

const patch = async (url, data) => {
  const response = await instance({
    method: "PATCH",
    url,
    data,
  })

  return response
}

const del = async (url) => {
  const response = await instance({
    method: "DELETE",
    url,
  })

  return response
}

export { get, post, patch, del }

// const fetch = async (url = "", data = null, method = "", authGet = false) => {
//   if (method === "POST") {
//     const response = await instance({
//       method: "POST",
//       url,
//       data,
//     })

//     return response
//   }

//   if (method === "GET" && !authGet) {
//     const response = await axios({
//       method: "GET",
//       url,
//     })

//     return response
//   }

//   if (method === "GET" && authGet) {
//     const response = await instance({
//       method: "GET",
//       url,
//     })

//     return response
//   }

//   if (method === "PATCH") {
//     const response = await instance({
//       method: "PATCH",
//       url,
//       data,
//     })

//     return response
//   }

//   if (method === "DELETE") {
//     const response = await instance({
//       method: "DELETE",
//       url,
//     })

//     return response
//   }
//   return null
// }

// export default fetch
