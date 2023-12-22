import { useState } from 'react'
import { validationInput } from './utils/validation'

export const useMyFormHook = (formDataStructure) => {
  const [formData, setFormData] = useState(formDataStructure)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const actions = {
    handleChange,
    handleSubmit
  }

  return { formData, actions }
}
