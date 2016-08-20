import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Dropdown } from '../../modules'

/**
 * Sugar for <Form.Field control={Dropdown} />
 */
function FormFieldDropdown(props) {
  return <FormField control={Dropdown} {...props} />
}

FormFieldDropdown._meta = {
  name: 'FormFieldDropdown',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldDropdown
