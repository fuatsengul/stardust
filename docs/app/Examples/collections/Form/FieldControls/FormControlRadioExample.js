import React, { Component } from 'react'
import { Form, FormField as Field } from 'stardust'

class FormControlRadioExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Field.Group grouped>
          <label>A Field.Group of Field.Radios</label>
          <Field.Radio
            label='Foo'
            name='formRadios'
            value='foo'
            checked={this.state.value === 'foo'}
            onClick={this.handleRadioClick}
          />
          <Field.Radio
            label='Bar'
            name='formRadios'
            value='bar'
            checked={this.state.value === 'bar'}
            onClick={this.handleRadioClick}
          />
          <Field.Radio
            label='Baz'
            name='formRadios'
            value='baz'
            checked={this.state.value === 'baz'}
            onClick={this.handleRadioClick}
          />
        </Field.Group>
      </Form>
    )
  }
}

export default FormControlRadioExample
