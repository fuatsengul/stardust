import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes, createElement } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import { Checkbox } from '../../modules'
import { Radio } from '../../addons'
import FormFieldButton from './FormFieldButton'
import FormFieldCheckbox from './FormFieldCheckbox'
import FormFieldDropdown from './FormFieldDropdown'
import FormFieldGroup from './FormFieldGroup'
import FormFieldInput from './FormFieldInput'
import FormFieldRadio from './FormFieldRadio'
import FormFieldSelect from './FormFieldSelect'
import FormFieldTextArea from './FormFieldTextArea'

/**
 * A field is a form element containing a label and an input
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see TextArea
 */
function FormField(props) {
  const { control, children, className, disabled, error, inline, label, required, type, width } = props
  const classes = cx(
    useKeyOnly(error, 'error'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(required, 'required'),
    useWidthProp(width, 'wide'),
    'field',
    className,
  )
  const rest = getUnhandledProps(FormField, props)

  // ----------------------------------------
  // Default Field
  // ----------------------------------------

  if (!control && !label) return <div {...rest} className={classes}>{children}</div>

  // ----------------------------------------
  // Control Field
  // ----------------------------------------

  const controlProps = { ...rest, children, type }

  // form field control, without a label
  if (!label) {
    return (
      <div className={classes}>
        {createElement(control, controlProps)}
      </div>
    )
  }

  // ----------------------------------------
  // Control Field with label
  // ----------------------------------------

  // wrap HTML checkboxes/radios in the label
  if (control === 'input' && type === 'checkbox' || type === 'radio') {
    return (
      <div className={classes}>
        <label>
          {createElement(control, controlProps)}
          {label}
        </label>
      </div>
    )
  }

  // pass label prop to controls that support it
  if (control === Checkbox || control === Radio || _.has(control, 'propTypes.label')) {
    return (
      <div className={classes}>
        {createElement(control, { ...controlProps, label })}
      </div>
    )
  }

  // form control with adjacent label
  return (
    <div className={classes}>
      <label>{label}</label>
      {createElement(control, controlProps)}
    </div>
  )
}

FormField.Button = FormFieldButton
FormField.Checkbox = FormFieldCheckbox
FormField.Dropdown = FormFieldDropdown
FormField.Group = FormFieldGroup
FormField.Input = FormFieldInput
FormField.Radio = FormFieldRadio
FormField.Select = FormFieldSelect
FormField.TextArea = FormFieldTextArea

FormField._meta = {
  name: 'FormField',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    width: SUI.WIDTHS,
    control: [
      'button',
      'input',
      'select',
      'textarea',
    ],
  },
}

FormField.propTypes = {
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: customPropTypes.every([
    customPropTypes.givenProps(
      { control: 'input' },
      customPropTypes.disallow(['children'])
    ),
    customPropTypes.some([
      PropTypes.func,
      PropTypes.oneOf(FormField._meta.props.control),
    ]),
  ]),

  /** Primary content */
  children: customPropTypes.every([
    customPropTypes.givenProps(
      { control: PropTypes.oneOf(['input', 'textarea']).isRequired },
      customPropTypes.disallow(['control', 'type']),
    ),
    PropTypes.node,
  ]),

  /** Additional classes to add */
  className: PropTypes.string,

  /** Individual fields may be disabled */
  disabled: PropTypes.bool,

  /** Individual fields may display an error state */
  error: PropTypes.bool,

  /** A field can have its label next to instead of above it */
  inline: PropTypes.bool,

  /** Mutually exclusive with children. */
  label: PropTypes.string,

  /** A field can show that input is mandatory.  Requires a label. */
  required: customPropTypes.every([
    customPropTypes.demand(['label']),
    PropTypes.bool,
  ]),

  /** Passed to the control component (i.e. <input type='password' />) */
  type: customPropTypes.every([
    customPropTypes.demand(['control']),
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),

  /** A field can specify its width in grid columns */
  width: PropTypes.oneOf(FormField._meta.props.width),
}

export default FormField
