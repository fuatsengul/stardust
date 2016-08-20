import React from 'react'
import { Form, FormField as Field } from 'stardust'

const FormFieldHTMLControlExample = () => (
  <Form>
    <Field control='input' label='An HTML <input>' />
    <Field control='select' label='An HTML <select>'>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </Field>
    <Field control='textarea' label='An HTML <textarea>' />
    <Field control='button' label='An HTML <button>'>
      HTML Button
    </Field>
  </Form>
)

export default FormFieldHTMLControlExample
