import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { TextArea } from '../../addons'

/**
 * Sugar for <Form.Field control={TextArea} />
 * @see Form
 * @see TextArea
 */
function FormFieldTextArea(props) {
  return <FormField control={TextArea} {...props} />
}

FormFieldTextArea._meta = {
  name: 'FormFieldTextArea',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormFieldTextArea
