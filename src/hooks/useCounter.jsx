/* eslint-disable consistent-return */
import { useEffect, useState } from "react"
import useStores from "./useStores"

const useCounter = () => {
  const { requeststore } = useStores()
  const [request, setRequest] = useState(requeststore.requests.length)
  const [myRequests, setMyRequests] = useState(requeststore.myRequests.length)

  const setLenght = (array, type) => {
    let unFul = 0
    let ful = 0
    array.forEach((req) => {
      if (req.status === "Unfulfill") {
        unFul += 1
        return ""
      }
      ful += 1
      return ""
    })
    return type === "Unfulfill" ? unFul : ful
  }

  const [Unfulfill, setUnFullfill] = useState(
    setLenght(requeststore.requests, "Unfulfill")
  )
  const [fullfilled, setFullfilled] = useState(
    setLenght(requeststore.requests, "fullfil")
  )
  const [myUnfulfill, setMyUnFullfill] = useState(
    setLenght(requeststore.myRequests, "Unfulfill")
  )
  const [myfullfilled, setMyFullfilled] = useState(
    setLenght(requeststore.myRequests, "fullfil")
  )

  useEffect(() => {
    let cancelRequest = false

    const interval = () =>
      setInterval(() => {
        if (cancelRequest) return

        setRequest(requeststore.requests.length)
        setMyRequests(requeststore.myRequests.length)
        setUnFullfill(setLenght(requeststore.requests, "Unfulfill"))
        setFullfilled(setLenght(requeststore.requests, "fullfil"))
        setMyUnFullfill(setLenght(requeststore.myRequests, "Unfulfill"))
        setMyFullfilled(setLenght(requeststore.myRequests, "fullfil"))
      }, 60000)

    interval()

    return () => {
      cancelRequest = true
    }
  }, [requeststore])

  return {
    request,
    myRequestsLength: myRequests,
    UnfulfillLength: Unfulfill,
    fullfilledLength: fullfilled,
    myUnfulfillLength: myUnfulfill,
    myfullfilledLength: myfullfilled,
  }
}

export default useCounter
