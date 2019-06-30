import React from 'react'
import ReactDom from 'react-dom'

import FormPhone from '../FormPhone'
import FormName from '../FormName'
import FormEmail from '../FormEmail'

describe('FormInput inheritors', () => {
  function crashTest (ComponentName) {
    it(`${ComponentName} should render without crashing`, () => {
      const div = document.createElement('div')
      ReactDom.render(<ComponentName value={''}/>, div)
      ReactDom.unmountComponentAtNode(div)
    })
  }
  const components = [FormPhone, FormName, FormEmail]
  components.forEach(component => crashTest(component))
})
