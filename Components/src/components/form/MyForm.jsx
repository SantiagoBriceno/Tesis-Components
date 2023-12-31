/*
Example of fields

const fields = const fields = [
    {
      titulo: 'Datos personales',
      campos: [
        [
          {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            required: true,
            placeholder: 'Enter your first name',
            id: 'firstName'
          },
          {
            label: 'Last Name',
            name: 'lastName',
            type: 'text',
            required: true,
            placeholder: 'Enter your last name',
            id: 'lastName'
          }
        ],
        [
          {
            label: 'Email',
            name: 'email',
            type: 'email',
            required: true,
            placeholder: 'Enter your email',
            id: 'email'
          }
        ],
        [
          {
            label: 'Password',
            name: 'password',
            type: 'password',
            required: true,
            placeholder: 'Enter your password',
            id: 'password'
          }
        ]
      ]
    },
    {
      titulo: 'Datos de la empresa',
      campos: [
        [
          {
            label: 'Empresa',
            name: 'empresa',
            type: 'text',
            required: true,
            placeholder: 'Enter your first name',
            id: 'empresa'
          },
          {
            label: 'RUC',
            name: 'ruc',
            type: 'text',
            required: true,
            placeholder: 'Enter your last name',
            id: 'ruc'
          }
        ],
        [
          {
            label: 'Dirección',
            name: 'direccion',
            type: 'text',
            required: true,
            placeholder: 'Enter your email',
            id: 'direccion'
          }
        ],
        [
          {
            label: 'Teléfono',
            name: 'telefono',
            type: 'text',
            required: true,
            placeholder: 'Enter your password',
            id: 'telefono'
          }
        ]
      ]
    }
  ]

Example of formData
const formData = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

Example of actions
const actions = {
  handleSubmit,
  handleChange,
  handleBlur
}

Example of validationMethod */

import { Heading, VStack, Stack, StackDivider } from '@chakra-ui/react'
import MyFormControl from './form-components/MyFormControl.jsx'
import MyInput from './form-components/MyInput.jsx'
import MyFormTemplate from './form-components/MyFormTemplate.jsx'
import MyButton from './form-components/MyButton.jsx'

const MyForm = ({ fields, formData, actions, validationMethod, title }) => {
  console.log(formData)
  return (
    <MyFormTemplate>
      <FormHeader title={title} />
      <FormContent fields={fields} formData={formData} actions={actions} />
      <FormFooter actions={actions} />
    </MyFormTemplate>
  )
}

export default MyForm

const FormContent = ({ fields, formData, actions }) => {
  return (
    <VStack divider={<StackDivider borderColor='gray.200' />}>
      {fields.map((field, index) => (
        <Stack key={index}>
          <Heading textAlign='center'>
            {field.titulo}
          </Heading>
          {field.campos.map((campo, index) => (
            <Stack key={index} direction='row'>
              {campo.map((c, index) => (
                <MyFormControl key={index} label={c.label}>
                  <MyInput
                    name={c.name}
                    type={c.type}
                    required={c.required}
                    placeholder={c.placeholder}
                    id={c.id}
                    onChange={actions.handleChange}
                    value={formData[c.id]}
                  />
                </MyFormControl>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </VStack>
  )
}

const FormHeader = ({ title }) => {
  return (
    <Heading textAlign='center'>
      {title}
    </Heading>
  )
}

const FormFooter = ({ actions }) => {
  return (
    <MyButton onClick={actions.handleSubmit} label='Click' />
  )
}
