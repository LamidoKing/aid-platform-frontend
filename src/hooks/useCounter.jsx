/* eslint-disable consistent-return */
import { useEffect, useState } from "react"

const useCounter = () => {
  const [request, setRequest] = useState(2500)

  useEffect(() => {
    let cancelRequest = false
    const interval = () =>
      setInterval(() => {
        if (cancelRequest) return

        setRequest(request + 10)
      }, 60000)

    interval()

    return () => {
      cancelRequest = true
    }
  }, [request])

  return { request }
}

export default useCounter
