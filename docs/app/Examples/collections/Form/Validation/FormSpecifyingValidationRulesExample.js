import React from 'react'
import { Button, Checkbox, Select, Form, FormField as Field, Input, Message } from 'stardust'

const fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  skills: ['minCount[2]', 'empty'],
  terms: 'checked',
}

const genderOptions = [
  { value: '', text: 'Gender' },
  { value: 'male', text: 'Male' },
  { value: 'female', text: 'Female' },
]

const skillsOptions = [
  { value: '', text: 'Select Skills' },
  { value: 'css', text: 'CSS' },
  { value: 'html', text: 'HTML' },
  { value: 'javascript', text: 'Javascript' },
]

const FormSpecifyingValidationRulesExample = (props) => (
  <Form className='segment' fields={fields}>
    <p>Tell Us About Yourself</p>
    <Field.Group evenlyDivided>
      <Field>
        <label>Name</label>
        <Input placeholder='First Name' name='name' type='text' />
      </Field>
      <Field label='Gender'>
        <Select name='gender' options={genderOptions} />
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
    <Field label='Skills'>
      <Select multiple name='skills' options={skillsOptions} />
    </Field>
    <Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Field>
    <Button className='blue submit'>Submit</Button>
    <Message error />
  </Form>
)

export default FormSpecifyingValidationRulesExample
