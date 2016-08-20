import React from 'react'

import FormFieldInput from 'src/collections/Form/FormFieldInput'
import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('FormFieldInput', () => {
  common.isConformant(FormFieldInput)

  it('renders a FormField with a Input control', () => {
    shallow(<FormFieldInput />)
      .find('FormField')
      .should.have.prop('control', Input)
  })
})
