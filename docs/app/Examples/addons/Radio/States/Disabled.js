import React from 'react'
import { Form, Radio, FormField as Field } from 'stardust'

const RadioDisabledExample = () => (
  <Form>
    <Field>
      <Radio label='Disabled' disabled />
    </Field>
    <Field>
      <Radio type='toggle' label='Disabled' disabled />
    </Field>
  </Form>
)

export default RadioDisabledExample
