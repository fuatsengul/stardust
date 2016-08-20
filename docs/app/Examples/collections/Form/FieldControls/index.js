import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const FormTypesExamples = () => (
  <div>
    <ExampleSection title='Field HTML Controls'>
      <ComponentExample
        description='A field control can be a plain HTML element'
        examplePath='collections/Form/FieldControls/FormFieldControlHTMLExample'
      />
    </ExampleSection>
    <ExampleSection title='Field Sub Component Controls'>
      <ComponentExample
        title={<code>{'<Field.Button />'}</code>}
        description='A Field.Button is a Button wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlButtonExample'
      />
      <ComponentExample
        title={<code>{'<Field.Checkbox />'}</code>}
        description='A Field.Checkbox is a Checkbox wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlCheckboxExample'
      />
      <ComponentExample
        title={<code>{'<Field.Input />'}</code>}
        description='A Field.Input is a Input wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlInputExample'
      />
      <ComponentExample
        title={<code>{'<Field.Radio />'}</code>}
        description='A Field.Radio is a Radio wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlRadioExample'
      />
      <ComponentExample
        title={<code>{'<Field.Select />'}</code>}
        description='A Field.Select is a Select wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlSelectExample'
      />
      <ComponentExample
        title={<code>{'<Field.TextArea />'}</code>}
        description='A Field.TextArea is a TextArea wrapped in a FormField'
        examplePath='collections/Form/FieldControls/FormControlTextAreaExample'
      />
    </ExampleSection>
    <ExampleSection title='Field Control'>
      <ComponentExample
        title={<span><code>{'<Field control={Button} />'}</code></span>}
        description='A Field can accept a Button control'
        examplePath='collections/Form/FieldControls/FormFieldControlButtonExample'
      />
      <ComponentExample
        title={<span><code>{'<Field control={Checkbox} />'}</code></span>}
        description='A Field can accept a Checkbox control'
        examplePath='collections/Form/FieldControls/FormFieldControlCheckboxExample'
      />
      <ComponentExample
        title={<span><code>{'<Field control={Input} />'}</code></span>}
        description='A Field can accept a Input control'
        examplePath='collections/Form/FieldControls/FormFieldControlInputExample'
      />
      <ComponentExample
        title={<span><code>{'<Field control={Radio} />'}</code></span>}
        description='A Field can accept a Radio control'
        examplePath='collections/Form/FieldControls/FormFieldControlRadioExample'
      />
      <ComponentExample
        title={<span><code>{'<Field control={Select} />'}</code></span>}
        description='A Field can accept a Select control'
        examplePath='collections/Form/FieldControls/FormFieldControlSelectExample'
      />
      <ComponentExample
        title={<span><code>{'<Field control={TextArea} />'}</code></span>}
        description='A Field can accept a TextArea control'
        examplePath='collections/Form/FieldControls/FormFieldControlTextAreaExample'
      />
    </ExampleSection>
  </div>
)

export default FormTypesExamples
