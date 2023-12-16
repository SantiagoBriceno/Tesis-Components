import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'

const MyFormControl = ({ label, helperText = null, children }) => {
  return (
    <FormControl p={8}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MyFormControl
