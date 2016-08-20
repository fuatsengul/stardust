import React from 'react'

import FormField from 'src/collections/Form/FormField'
import FormFieldButton from 'src/collections/Form/FormFieldButton'
import FormFieldCheckbox from 'src/collections/Form/FormFieldCheckbox'
import FormFieldDropdown from 'src/collections/Form/FormFieldDropdown'
import FormFieldGroup from 'src/collections/Form/FormFieldGroup'
import FormFieldInput from 'src/collections/Form/FormFieldInput'
import FormFieldRadio from 'src/collections/Form/FormFieldRadio'
import FormFieldSelect from 'src/collections/Form/FormFieldSelect'
import FormFieldTextArea from 'src/collections/Form/FormFieldTextArea'
import * as common from 'test/specs/commonTests'

describe('FormField', () => {
  common.isConformant(FormField)
  common.implementsWidthProp(FormField, { propKey: 'width', canEqual: false })
  common.propKeyOnlyToClassName(FormField, 'error')
  common.propKeyOnlyToClassName(FormField, 'disabled')
  common.propKeyOnlyToClassName(FormField, 'inline')
  common.propKeyOnlyToClassName(FormField, 'required', { label: '' })
  common.rendersChildren(FormField)
  common.hasSubComponents(FormField, [
    FormFieldButton,
    FormFieldCheckbox,
    FormFieldDropdown,
    FormFieldTextArea,
    FormFieldGroup,
    FormFieldInput,
    FormFieldRadio,
    FormFieldSelect,
  ])

  describe('html controls', () => {
    it('adds an HTML element child of the same type', () => {
      const controls = ['button', 'input', 'select', 'textarea']

      controls.forEach((control) => {
        shallow(<FormField control={control} />)
          .should.have.descendants(control)
      })
    })
  })

  describe('label', () => {
    it('does not add a label child by default', () => {
      shallow(<FormField />)
        .should.not.have.descendants('label')
    })
    it('adds a label child', () => {
      const wrapper = shallow(<FormField label='First Name' />)
      wrapper
        .should.have.descendants('label')

      wrapper
        .find('label')
        .should.contain.text('First Name')
    })
  })
})
