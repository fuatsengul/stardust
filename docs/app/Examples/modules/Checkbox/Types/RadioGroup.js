import React, { Component } from 'react'
import { Form, FormField as Field, Checkbox } from 'stardust'

export default class CheckboxRadioGroupExample extends Component {
  state = {}
  handleClick = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Field>
          Selected value: <b>{this.state.value}</b>
        </Field>
        <Field>
          <Checkbox
            type='radio'
            label='Choose this'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onClick={this.handleClick}
          />
        </Field>
        <Field>
          <Checkbox
            type='radio'
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onClick={this.handleClick}
          />
        </Field>
      </Form>
    )
  }
}
