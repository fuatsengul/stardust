import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Button } from '../../elements'

/**
 * Sugar for <Form.Field control={Button} />
 */
function FormFieldButton(props) {
  return <FormField control={Button} {...props} />
}

FormFieldButton._meta = {
  name: 'FormFieldButton',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldButton
