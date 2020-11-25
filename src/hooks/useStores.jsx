import { useContext } from "react"
import { storesContext } from "mobxStore"

const useStores = () => {
  const store = useContext(storesContext)
  return store
}

export default useStores
