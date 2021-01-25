import axios from "axios"
import * as AuthToken from "./token"
import { baseURL } from "./urls"

const instance = axios.create({
  baseURL,
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
