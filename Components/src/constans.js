export const fields = [
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

export const formDataStructure = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  empresa: '',
  ruc: '',
  direccion: '',
  telefono: ''
}
