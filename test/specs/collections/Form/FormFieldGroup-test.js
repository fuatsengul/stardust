import FormFieldGroup from 'src/collections/Form/FormFieldGroup'
import * as common from 'test/specs/commonTests'

describe('FormFieldGroup', () => {
  common.isConformant(FormFieldGroup)
  common.rendersChildren(FormFieldGroup)
  common.propKeyOnlyToClassName(FormFieldGroup, 'grouped')
  common.propKeyOnlyToClassName(FormFieldGroup, 'inline')
  common.implementsWidthProp(FormFieldGroup, { propKey: 'widths', canEqual: true })
})
