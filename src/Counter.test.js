import React from 'react'
import { Counter } from './Counter'
import { shallow } from 'enzyme'

describe('<Counter />', () => {
  it('mounts', () => {
    const props = {
      count: 10,
      increment: () => 0,
      decrement: () => 0
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.length).toEqual(1)
  })
  it('calls increment', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(props.increment.mock.calls.length).toEqual(0)
    wrapper.find('.incrementClass').simulate('click')
    expect(props.increment.mock.calls.length).toEqual(1)

    expect(props.decrement.mock.calls.length).toEqual(0)
    wrapper.find('.decrementClass').simulate('click')
    expect(props.decrement.mock.calls.length).toEqual(1)

    expect(wrapper.find('.countClass').text()).toEqual('Contador: 10')
  })
})