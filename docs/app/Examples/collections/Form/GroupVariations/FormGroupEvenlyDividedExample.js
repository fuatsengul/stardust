import React, { Component } from 'react'
import { Form, FormField as Field, Input } from 'stardust'

export default class FormGroupEvenlyDividedExample extends Component {
  render() {
    return (
      <Form>
        <Field.Group evenlyDivided>
          <Field label='First name'>
            <Input placeholder='First name' />
          </Field>
          <Field label='Last name'>
            <Input placeholder='Last name' />
          </Field>
        </Field.Group>
      </Form>
    )
  }
}
