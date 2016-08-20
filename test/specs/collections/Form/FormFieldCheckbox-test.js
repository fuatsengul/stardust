import React from 'react'

import FormFieldCheckbox from 'src/collections/Form/FormFieldCheckbox'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('FormFieldCheckbox', () => {
  common.isConformant(FormFieldCheckbox)

  it('renders a FormField with a Checkbox control', () => {
    shallow(<FormFieldCheckbox />)
      .find('FormField')
      .should.have.prop('control', Checkbox)
  })
})
