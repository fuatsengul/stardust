import Form from 'src/collections/Form/Form'
import FormField from 'src/collections/Form/FormField'

import * as common from 'test/specs/commonTests'

describe('Form', () => {
  common.isConformant(Form)
  common.hasUIClassName(Form)
  common.hasSubComponents(Form, [FormField])
  common.rendersChildren(Form)
  common.implementsWidthProp(Form, { propKey: 'widths' })
})
