import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Button from './Button'

describe('A suite', function() {
  it('should render without throwing an error', function() {
    const button = shallow(<Button text=""/>)
    expect(button.find('.btn')).toBeDefined()
  })

  it('should have empty text on the button when props.text not defined', function() {
  	const button = shallow(<Button text=""/>)
  	expect(button.find('.btn').text()).toBe('')
  })

  it('should have a text on the button', function() {
  	const button = shallow(<Button text="I am button"/>)
  	expect(button.find('.btn').text()).toEqual('I am button')
  })
})