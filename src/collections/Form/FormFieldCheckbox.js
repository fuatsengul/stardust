import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Checkbox } from '../../modules'

/**
 * Sugar for <Form.Field control={Checkbox} />
 */
function FormFieldCheckbox(props) {
  return <FormField control={Checkbox} {...props} />
}

FormFieldCheckbox._meta = {
  name: 'FormFieldCheckbox',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldCheckbox
