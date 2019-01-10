import React from 'react'
import { render } from 'react-dom'
import { shallow, mount } from 'enzyme'
import axios from 'axios'

import App from './App'

jest.mock('react-dom')
jest.mock('axios')

describe('Testing App component', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.container')).toHaveLength(1)
  })

  it('should find button with id=#btn-1', function() {
  	const wrapper = shallow(<App />)
  	expect(wrapper.find('#btn-1')).toHaveLength(1)
	})

	it('should find button with id=#btn-2', function() {
  	const wrapper = shallow(<App />)
  	expect(wrapper.find('#btn-2')).toHaveLength(1)
	})

	it('should find button with id=#btn-3', function() {
  	const wrapper = shallow(<App />)
  	expect(wrapper.find('#btn-3')).toHaveLength(1)
	})

	it('should find button with id=#btn-4', function() {
  	const wrapper = shallow(<App />)
  	expect(wrapper.find('#btn-4')).toHaveLength(1)
	})

	it('should throw an alert when clicking #btn-1', function() {
		window.alert = jest.fn()
  	const wrapper = shallow(<App />)
  	wrapper.find('#btn-1').simulate('click')
  	expect(window.alert).toHaveBeenCalledWith('hello!')
  })

	it('should change state.text to visit app congress', function() {
  	const wrapper = shallow(<App />)
  	wrapper.find('#btn-2').simulate('click')
  	expect(wrapper.state().text).toBe('visit app congress')
  })

	it('should change window location to #market-research', function() {
  	const wrapper = shallow(<App />)
  	wrapper.find('#btn-3').simulate('click')
  	expect(window.location.hash).toBe('#market-research')
  })

  it('should add state.counter', function() {
  	const wrapper = shallow(<App />)
  	wrapper.find('#btn-4').simulate('click')
  	wrapper.find('#btn-4').simulate('click')
  	wrapper.find('#btn-4').simulate('click')
  	expect(wrapper.state().counter).toEqual(3)
  	expect(wrapper.find('.counter').text()).toBe('3')
  })

  it('fetch data on #componentDidMount', () => {
	  const resp = {owner: {login: 'invoramadani'}}
	  axios.get.mockResolvedValue(resp)
	  // axios.get.mockImplementation(() => Promise.resolve(resp))
	  function callback(data) {
	    expect(data).toEqual(resp)
	    done()
	  }

  	const wrapper = shallow(<App />)
	  wrapper.instance().loadData()
	  	.then(res => callback(res))
	  	.catch(err => console.log('error in testing to get data'))
	})

	it('component add method test', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.instance().add(1,3)).toBe(4)
	})
})