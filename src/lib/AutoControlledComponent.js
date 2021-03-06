/* eslint-disable no-console */
/**
 * Why choose inheritance over a HOC?  Multiple advantages for this particular use case.
 * In short, we need identical functionality to setState(), unless there is a prop defined
 * for the state key.  Also:
 *
 * 1. Single Renders
 *    Calling trySetState() in constructor(), componentWillMount(), or componentWillReceiveProps()
 *    does not cause two renders. Consumers and tests do not have to wait two renders to get state.
 *    See www.react.run/4kJFdKoxb/27 for an example of this issue.
 *
 * 2. Simple Testing
 *    Using a HOC means you must either test the undecorated component or test through the decorator.
 *    Testing the undecorated component means you must mock the decorator functionality.
 *    Testing through the HOC means you can not simply shallow render your component.
 *
 * 3. Statics
 *    HOC wrap instances, so statics are no longer accessible.  They can be hoisted, but this is more
 *    looping over properties and storing references.  We rely heavily on statics for testing and sub
 *    components.
 *
 * 4. Instance Methods
 *    Some instance methods may be exposed to users via refs.  Again, these are lost with HOC unless
 *    hoisted and exposed by the HOC.
 */
import _ from 'lodash'
import { Component } from 'react'

const getDefaultPropName = (prop) => `default${prop[0].toUpperCase() + prop.slice(1)}`

export default class AutoControlledComponent extends Component {
  componentWillMount() {
    if (super.componentWillMount) super.componentWillMount()
    const { autoControlledProps } = this.constructor

    // Auto controlled props are copied to state.
    // Set initial state by copying auto controlled props to state.
    // Also look for the default prop for any auto controlled props (foo => defaultFoo)
    // so we can set initial values from defaults.
    this.state = _.transform(autoControlledProps, (res, prop) => {
      const defaultPropName = getDefaultPropName(prop)

      // try to set initial state in this order:
      //  - default props
      //  - then, regular props
      //  - then, `checked` defaults to false
      //  - then, `value` defaults to null
      // React doesn't allow changing from uncontrolled to controlled components
      // this is why we default checked/value if they are not present.
      if (_.has(this.props, defaultPropName)) {
        res[prop] = this.props[defaultPropName]
      } else if (_.has(this.props, prop)) {
        res[prop] = this.props[prop]
      } else if (prop === 'checked') {
        res[prop] = false
      } else if (prop === 'value') {
        res[prop] = ''
      }

      if (process.env.NODE_ENV !== 'production') {
        const { name } = this.constructor
        // prevent defaultFoo={} along side foo={}
        if (defaultPropName in this.props && prop in this.props) {
          console.error(
            `${name} prop "${prop}" is auto controlled. Specify either ${defaultPropName} or ${prop}, but not both.`
          )
        }
      }
    }, {})

    if (process.env.NODE_ENV !== 'production') {
      const { defaultProps, name, propTypes } = this.constructor
      // require static autoControlledProps
      if (!autoControlledProps) {
        console.error(`Auto controlled ${name} must specify a static autoControlledProps array.`)
      }

      // require propTypes
      _.each(autoControlledProps, (prop) => {
        const defaultProp = getDefaultPropName(prop)
        // regular prop
        if (!_.has(propTypes, defaultProp)) {
          console.error(`${name} is missing "${defaultProp}" propTypes validation for auto controlled prop "${prop}".`)
        }
        // its default prop
        if (!_.has(propTypes, prop)) {
          console.error(`${name} is missing propTypes validation for auto controlled prop "${prop}".`)
        }
      })

      // prevent autoControlledProps in defaultProps
      //
      // When setting state, auto controlled props values always win (so the parent can manage them).
      // It is not reasonable to decipher the difference between props from the parent and defaultProps.
      // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
      // Auto controlled props also listed in defaultProps can never be updated.
      const illegalDefaults = _.intersection(autoControlledProps, _.keys(defaultProps))
      if (!_.isEmpty(illegalDefaults)) {
        console.error([
          'Do not set defaultProps for autoControlledProps,',
          'use trySetState() in constructor() or componentWillMount() instead.',
          `See ${name} props: "${illegalDefaults}".`,
        ].join(' '))
      }

      // prevent listing defaultProps in autoControlledProps
      //
      // Default props are automatically handled.
      // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.
      const illegalAutoControlled = _.filter(autoControlledProps, prop => prop.startsWith('default'))
      if (!_.isEmpty(illegalAutoControlled)) {
        console.error([
          'Do not add default props to autoControlledProps.',
          'Default props are automatically handled.',
          `See ${name} autoControlledProps: "${illegalAutoControlled}".`,
        ].join(' '))
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (super.componentWillReceiveProps) super.componentWillReceiveProps(nextProps)

    // props always win, update state with all auto controlled prop
    const newState = _.pick(nextProps, this.constructor.autoControlledProps)
    if (!_.isEmpty(newState)) this.setState(newState)
  }

  /**
   * Safely attempt to set state for props that might be controlled by the user.
   * Second argument is a state object that is always passed to setState.
   * @param {object} maybeState State that corresponds to controlled props.
   * @param {object} [state] Actual state, useful when you also need to setState.
   */
  trySetState = (maybeState, state) => {
    const { autoControlledProps } = this.constructor
    if (process.env.NODE_ENV !== 'production') {
      const { name } = this.constructor
      // warn about failed attempts to setState for keys not listed in autoControlledProps
      const illegalKeys = _.difference(_.keys(maybeState), autoControlledProps)
      if (!_.isEmpty(illegalKeys)) {
        console.error([
          `${name} called trySetState() with controlled props: "${illegalKeys}".`,
          'State will not be set.',
          'Only props in static autoControlledProps will be set on state.',
        ].join(' '))
      }
    }

    // pick auto controlled props
    // omit props from parent
    let newState = _.omit(_.pick(maybeState, autoControlledProps), _.keys(this.props))

    if (state) newState = { ...newState, ...state }

    if (!_.isEmpty(newState)) this.setState(newState)
  }
}
