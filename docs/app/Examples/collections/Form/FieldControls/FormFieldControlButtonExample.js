import React from 'react'
import { Button, Form, FormField as Field } from 'stardust'

// TODO: update Button usage once Button is updated to v1 API

const FormFieldControlButtonExample = () => (
  <Form>
    <Field control={Button} label='A Button'>
      A Button
    </Field>
  </Form>
)

export default FormFieldControlButtonExample
