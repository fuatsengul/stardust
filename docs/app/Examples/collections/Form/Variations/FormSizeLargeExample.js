import React from 'react'
import { Button, Form, FormField as Field, Input } from 'stardust'

const FormSizeLargeExample = () => (
  <Form className='large'>
    <Field.Group>
      <Field label='First name'>
        <Input placeholder='First name' />
      </Field>
      <Field label='Last name'>
        <Input placeholder='Last name' />
      </Field>
    </Field.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormSizeLargeExample
