import React from 'react'
import { Select, Form, FormField as Field } from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const FormFieldControlSelectExample = () => (
  <Form>
    <Field control={Select} label='A Select' options={options} />
  </Form>
)

export default FormFieldControlSelectExample
