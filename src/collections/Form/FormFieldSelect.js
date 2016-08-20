import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Select } from '../../addons'

/**
 * Sugar for <Form.Field control={Select} />
 */
function FormFieldSelect(props) {
  return <FormField control={Select} {...props} />
}

FormFieldSelect._meta = {
  name: 'FormFieldSelect',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldSelect
