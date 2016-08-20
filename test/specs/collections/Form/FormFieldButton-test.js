import React from 'react'

import FormFieldButton from 'src/collections/Form/FormFieldButton'
import Button from 'src/elements/Button/Button'
import * as common from 'test/specs/commonTests'

describe('FormFieldButton', () => {
  common.isConformant(FormFieldButton)

  it('renders a FormField with a Button control', () => {
    shallow(<FormFieldButton />)
      .find('FormField')
      .should.have.prop('control', Button)
  })
})
