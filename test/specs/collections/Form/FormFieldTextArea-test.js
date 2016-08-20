import React from 'react'

import FormFieldTextArea from 'src/collections/Form/FormFieldTextArea'
import TextArea from 'src/addons/TextArea/TextArea'
import * as common from 'test/specs/commonTests'

describe('FormFieldTextArea', () => {
  common.isConformant(FormFieldTextArea)

  it('renders a FormField with a TextArea control', () => {
    shallow(<FormFieldTextArea />)
      .find('FormField')
      .should.have.prop('control', TextArea)
  })
})
