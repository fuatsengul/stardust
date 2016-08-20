import React, { Component } from 'react'
import { Form, Checkbox, FormField as Field } from 'stardust'

export default class CheckboxDisabledExample extends Component {
  render() {
    return (
      <Form>
        <Field>
          <Checkbox label='Disabled' disabled />
        </Field>
        <Field>
          <Checkbox type='toggle' label='Disabled' disabled />
        </Field>
      </Form>
    )
  }
}
