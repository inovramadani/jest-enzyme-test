import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from './App'

describe('A suite', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.container')).toBeDefined()
  })
})