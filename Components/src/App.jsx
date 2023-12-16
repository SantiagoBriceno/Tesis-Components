import { Center } from '@chakra-ui/react'
import MyForm from './components/form/MyForm'
import { fields, formDataStructure } from './constans'
import { useMyFormHook } from './hooks/useMyFormHook'
function App () {
  const { formData, actions } = useMyFormHook(formDataStructure)

  return (
    <Center bg='gray'>
      <MyForm title='MyForm' fields={fields} formData={formData} actions={actions} />
    </Center>

  )
}

export default App
