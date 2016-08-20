import React from 'react'
import { Form, FormField as Field, Input } from 'stardust'

const FormFieldInlineExample = () => (
  <Form>
    <Field label='First name' className='inline'>
      <Input placeholder='First name' />
    </Field>
  </Form>
)

export default FormFieldInlineExample
