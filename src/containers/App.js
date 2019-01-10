import React, { Component } from 'react'
import axios from 'axios'

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
					<p className="owner">{this.state.owner ? this.state.owner.login : 'empty'}</p>
				</div>
			</div>
		)
	}

	componentWillMount() {
		const data = this.loadData()
		this.setState({
			owner: data.owner
		})
	}

	add (a, b) {
		return a + b
	}

	loadData () {
		return new Promise((resolve, reject) => {
			return axios.get('https://api.github.com/users/inovramadani/repos')
			.then(res => {
				return resolve({owner: {login: res.data[0].owner.login}})
			})
			.catch(error => reject(console.log('Error: no data returned')))
		})
		.catch(error => console.log('Promise second error'))
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