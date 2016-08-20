import React from 'react'

import FormFieldSelect from 'src/collections/Form/FormFieldSelect'
import Select from 'src/addons/Select/Select'
import * as common from 'test/specs/commonTests'

describe('FormFieldSelect', () => {
  common.isConformant(FormFieldSelect)

  it('renders a FormField with a Select control', () => {
    shallow(<FormFieldSelect />)
      .find('FormField')
      .should.have.prop('control', Select)
  })
})
