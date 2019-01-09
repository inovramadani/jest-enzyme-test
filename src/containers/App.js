import React, { Component } from 'react'
import Button from '../components/Button'
import './App.less'
import logo from '../../public/image/forstek_logo.png'
import grass from '../../public/image/grass.jpg'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			text: '',
			counter: 0,
		}
	}

	render() {
		return (
			<div className="container">
				<div className="barrier">
					<div className="welcome-words">
						<img src={logo} />
						<p>Hi, welcome to Forstek!</p>
						<p>What can we do for you?</p>
					</div>
					<div className='cta-button'>
						<Button id="btn-1" text="create website" onClick={() => alert('hello!')}/>
						<Button id="btn-2" text="visit App Congress" onClick={this.visitAppCongress.bind(this)}/>
						<Button id="btn-3" text="market research" onClick={this.visitMarketResearch.bind(this)}/>
						<Button id="btn-4" text="join Forstek" onClick={this.joinForstek.bind(this)}/>
					</div>
					<a href="https://www.google.com">Go to google</a>
					<p className="text">{this.state.text}</p>
					<p className="counter">{this.state.counter}</p>
				</div>
			</div>
		)
	}

	visitAppCongress() {
		this.setState({ text: 'visit app congress' })
	}

	visitMarketResearch () {
		window.location = '#market-research'
	}

	joinForstek () {
		this.setState({ counter: this.state.counter + 1 })
	}
}