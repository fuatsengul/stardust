import React from 'react'

import FormFieldDropdown from 'src/collections/Form/FormFieldDropdown'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

describe('FormFieldDropdown', () => {
  common.isConformant(FormFieldDropdown)

  it('renders a FormField with a Dropdown control', () => {
    shallow(<FormFieldDropdown />)
      .find('FormField')
      .should.have.prop('control', Dropdown)
  })
})
