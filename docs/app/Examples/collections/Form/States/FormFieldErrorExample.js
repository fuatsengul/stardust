import React from 'react'
import { Form, FormField as Field, Input } from 'stardust'

const FormFieldErrorExample = () => (
  <Form>
    <Field label='First name' className='error'>
      <Input placeholder='First name' />
    </Field>
  </Form>
)

export default FormFieldErrorExample
