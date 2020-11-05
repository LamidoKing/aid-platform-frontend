import { useEffect, useState } from "react"

const useForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState)
  const [file, setFile] = useState(undefined)
  const [fileName, setFileName] = useState(undefined)
  const [body, setBody] = useState()
  const [isnoEmpathyValue, setIsNoEmpathyValue] = useState(true)

  const handleChange = (prop) => (event) => {
    const { value } = event.target
    const { files } = event.target

    if (prop === "file") {
      const uploadedFile = files[0]
      let name = ""

      for (let i = 0; i < files.length; i = +1) {
        name += files[i].name
      }
      setFile(uploadedFile)
      setFileName(name)
    }

    setValues({ ...values, [prop]: value })
  }

  const handleSummit = () => {
    setBody(values)
  }

  useEffect(() => {
    const empathyField = []
    const valuesKeys = Object.keys(values)

    valuesKeys.map((key) => {
      if (!values[key]) {
        empathyField.push(key)
      }
      return ""
    })

    const noEmpathy = () => empathyField.length === 0

    setIsNoEmpathyValue(noEmpathy)
  }, [values])

  return {
    values,
    file,
    fileName,
    handleChange,
    isnoEmpathyValue,
    body,
    handleSummit,
  }
}

export default useForm
