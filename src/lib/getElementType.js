/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
 */
function getElementType(props) {
  const { el } = props

  // use defined el
  if (el) return el

  // infer anchor links
  if (props.href) return 'a'

  return props.defaultEl || 'div'
}

export default getElementType
