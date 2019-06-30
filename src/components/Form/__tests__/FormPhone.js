import React from 'react'
import FormPhone from '../FormPhone'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('FormPhone', () => {
  it(`When user write "7" the input will show "+7(___)-__-__"`, () => {
    let mockCallBack = jest.fn(x => x)
    let wrapper = shallow(<FormPhone value='' onChange={mockCallBack}/>)
    wrapper.find('input').simulate('change', { target: { value: '7' } })
    expect(mockCallBack.mock.results[0].value).toBe('+7(___)-__-__')
  })
  it(`When user write "8" the input will show "+7(___)-__-__"`, () => {
    let mockCallBack = jest.fn(x => x)
    let wrapper = shallow(<FormPhone value='' onChange={mockCallBack}/>)
    wrapper.find('input').simulate('change', { target: { value: '8' } })
    expect(mockCallBack.mock.results[0].value).toBe('+7(___)-__-__')
  })
  it(`When user write "6" the input will show "+7(6__)-__-__"`, () => {
    let mockCallBack = jest.fn(x => x)
    let wrapper = shallow(<FormPhone value='' onChange={mockCallBack}/>)
    wrapper.find('input').simulate('change', { target: { value: '6' } })
    expect(mockCallBack.mock.results[0].value).toBe('+7(6__)-__-__')
  })
})
