import React from 'react'
import { Form, FormField as Field } from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const FormControlSelectExample = () => (
  <Form>
    <Field.Select label='A Field.Select' options={options} />
  </Form>
)

export default FormControlSelectExample
