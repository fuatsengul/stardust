import React, { PropTypes } from 'react'
import classNames from 'classnames'

import {
  getUnhandledProps,
  META,
  SUI,
  useWidthProp,
  useKeyOnly,
  customPropTypes,
} from '../../lib'

/**
 * A set of fields can appear grouped together
 */
function FormFieldGroup(props) {
  const { children, className, grouped, inline, widths } = props

  const classes = classNames(
    useWidthProp(widths, null, true),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(grouped, 'grouped'),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormFieldGroup, props)

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

FormFieldGroup._meta = {
  name: 'FormFieldGroup',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
  props: {
    widths: [...SUI.WIDTHS, 'equal'],
  },
}

FormFieldGroup.propTypes = {
  /** Primary content.  Intended to be Form Fields. */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.string,

  /** Fields can show related choices */
  grouped: customPropTypes.every([
    customPropTypes.disallow(['inline']),
    PropTypes.bool,
  ]),

  /** Multiple fields may be inline in a row */
  inline: customPropTypes.every([
    customPropTypes.disallow(['grouped']),
    PropTypes.bool,
  ]),

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
  widths: PropTypes.oneOfType(FormFieldGroup._meta.props.widths),
}

export default FormFieldGroup
