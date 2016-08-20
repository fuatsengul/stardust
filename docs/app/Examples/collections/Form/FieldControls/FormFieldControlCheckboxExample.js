import React from 'react'
import { Checkbox, Form, FormField as Field } from 'stardust'

const FormFieldControlCheckboxExample = () => (
  <Form>
    <Field control={Checkbox} label='I agree to the Terms and Conditions' />
  </Form>
)

export default FormFieldControlCheckboxExample
