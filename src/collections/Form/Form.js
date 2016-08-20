import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import FormField from './FormField'

const serialize = (formNode) => {
  const json = {}
  // handle empty formNode ref
  if (!formNode) return json

  _.each(['input', 'textarea', 'select'], (tag) => {
    _.each(formNode.getElementsByTagName(tag), (node, index, arr) => {
      const name = node.getAttribute('name')

      switch (node.getAttribute('type')) {
        case 'checkbox':
          json[name] = { checked: node.checked }
          break

        case 'radio':
          json[name] = { value: _.find(arr, { name, checked: true }).value }
          break

        default:
          json[name] = { value: node.value }
          break
      }
    })
  })

  return json
}
/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see TextArea
 */
function Form(props) {
  const { className, children, error, loading, onChange, size, success, warning, widths } = props
  const classes = cx(
    'ui',
    size,
    useKeyOnly(loading, 'loading'),
    useKeyOnly(success, 'success'),
    useKeyOnly(error, 'error'),
    useKeyOnly(warning, 'warning'),
    useWidthProp(widths, null, true),
    'form',
    className,
  )
  const rest = getUnhandledProps(Form, props)
  let _form

  const handleChange = (e) => {
    if (onChange) onChange(e, serialize(_form))
  }

  return (
    <form
      {...rest}
      className={classes}
      onChange={handleChange}
      ref={(c) => (_form = _form || c)}
    >
      {children}
    </form>
  )
}

Form.Field = FormField

Form._meta = {
  name: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    widths: ['equal'],
    size: _.without(SUI.SIZES, 'medium'),
  },
}

Form.propTypes = {
  /** Primary content */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.string,

  /** Automatically show a loading indicator */
  loading: PropTypes.bool,

  /** Automatically show any success Message children */
  success: PropTypes.bool,

  /** Automatically show any error Message children */
  error: PropTypes.bool,

  /** Automatically show any warning Message children */
  warning: PropTypes.bool,

  /** A form can vary in size */
  size: PropTypes.oneOf(Form._meta.props.size),

  /** Forms can automatically divide fields to be equal width */
  widths: PropTypes.oneOf(Form._meta.props.widths),

  /** Called with (event, jsonSerializedForm) on change */
  onChange: PropTypes.oneOf(Form._meta.props.widths),
}

export default Form
