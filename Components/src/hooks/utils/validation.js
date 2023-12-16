export const validationInput = ({ id, type, value, options = null }) => {
  let result = {}
  switch (id) {
    case 'firstName':
      if (value.lenght < 3) {
        result = {
          isInvalid: true,
          message: 'El nombre debe tener al menos 3 caracteres',
          isSubmitted: false
        }
      } else if (value === '') {
        result = {
          isInvalid: true,
          message: 'El nombre es requerido',
          isSubmitted: false
        }
      } else {
        result = {
          isInvalid: false,
          message: '',
          isSubmitted: true
        }
      }
      break

    case 'lastName':
      if (value.lenght < 3) {
        result = {
          isInvalid: true,
          message: 'El apellido debe tener al menos 3 caracteres',
          isSubmitted: false
        }
      } else if (value === '') {
        result = {
          isInvalid: true,
          message: 'El apellido es requerido',
          isSubmitted: false
        }
      } else {
        result = {
          isInvalid: false,
          message: '',
          isSubmitted: true
        }
      }
      break
    default:
      if (value === '') {
        result = {
          isInvalid: true,
          message: 'El campo es requerido',
          isSubmitted: false
        }
      } else {
        result = {
          isInvalid: false,
          message: '',
          isSubmitted: true
        }
      }
      break
  }
  return result
}
