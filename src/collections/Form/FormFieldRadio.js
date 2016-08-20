import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Radio } from '../../addons'

/**
 * Sugar for <Form.Field control={Radio} />
 */
function FormFieldRadio(props) {
  return <FormField control={Radio} {...props} />
}

FormFieldRadio._meta = {
  name: 'FormFieldRadio',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldRadio
