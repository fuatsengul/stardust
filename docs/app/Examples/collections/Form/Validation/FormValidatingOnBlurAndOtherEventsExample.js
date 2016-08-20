import React from 'react'
import { Button, Checkbox, Form, FormField as Field, Input } from 'stardust'

const fields = {
  firstName: 'empty',
  lastName: 'empty',
  username: 'empty',
  password: 'minLength[6]',
  terms: 'checked',
}

const FormValidatingOnBlurAndOtherEventsExample = (props) => (
  <Form className='segment' fields={fields} on='blur' inline>
    <p>Let's go ahead and get you signed up.</p>
    <Field.Group evenlyDivided>
      <Field>
        <label>First Name</label>
        <Input placeholder='First Name' name='firstName' type='text' />
      </Field>
      <Field>
        <label>Last Name</label>
        <Input placeholder='Last Name' name='lastName' type='text' />
      </Field>
    </Field.Group>
    <Field.Group evenlyDivided>
      <Field label='Username'>
        <Input placeholder='Username' name='username' type='text' />
      </Field>
      <Field label='Password'>
        <Input type='password' name='password' />
      </Field>
    </Field.Group>
    <Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Field>
    <Button className='blue submit'>Submit</Button>
  </Form>
)

export default FormValidatingOnBlurAndOtherEventsExample
