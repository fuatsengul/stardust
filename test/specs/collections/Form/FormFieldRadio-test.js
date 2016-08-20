import React from 'react'

import FormFieldRadio from 'src/collections/Form/FormFieldRadio'
import Radio from 'src/addons/Radio/Radio'
import * as common from 'test/specs/commonTests'

describe('FormFieldRadio', () => {
  common.isConformant(FormFieldRadio)

  it('renders a FormField with a Radio control', () => {
    shallow(<FormFieldRadio />)
      .find('FormField')
      .should.have.prop('control', Radio)
  })
})
