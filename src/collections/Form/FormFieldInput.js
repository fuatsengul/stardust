import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Input } from '../../elements'

/**
 * Sugar for <Form.Field control={Input} />
 */
function FormFieldInput(props) {
  return <FormField control={Input} {...props} />
}

FormFieldInput._meta = {
  name: 'FormFieldInput',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldInput
