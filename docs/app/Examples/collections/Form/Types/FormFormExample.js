import React from 'react'
import { Button, Checkbox, Form, FormField as Field } from 'stardust'

const FormFormExample = () => (
  <Form>
    <Field label='First Name'>
      <input placeholder='First Name' />
    </Field>
    <Field label='Last Name'>
      <input placeholder='Last Name' />
    </Field>
    <Field label='First Name'>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Field>
    <Button type='submit'>
      Submit
    </Button>
  </Form>
)

export default FormFormExample
