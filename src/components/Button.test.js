import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Button from './Button'

describe('A suite', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('.btn')).toBeDefined()
  })
})