import React, { Component } from 'react'
import { Button, Form, FormField as Field, Input } from 'stardust'

export default class FormSizeSmallExample extends Component {
  render() {
    return (
      <Form className='small'>
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
  }
}
