import React, { Component } from 'react'
import { Form, FormField as Field, Radio } from 'stardust'

class FormFieldControlRadioExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Field.Group>
          <label>A <code>Field.Group</code> containing <code>Field.Radio</code>s</label>
          <Field
            control={Radio}
            label='Foo'
            name='fieldControlRadios'
            value='foo'
            checked={value === 'foo'}
            onClick={this.handleRadioClick}
          />
          <Field
            control={Radio}
            label='Bar'
            name='fieldControlRadios'
            value='bar'
            checked={value === 'bar'}
            onClick={this.handleRadioClick}
          />
          <Field
            control={Radio}
            label='Baz'
            name='fieldControlRadios'
            value='baz'
            checked={value === 'baz'}
            onClick={this.handleRadioClick}
          />
        </Field.Group>
      </Form>
    )
  }
}

export default FormFieldControlRadioExample
