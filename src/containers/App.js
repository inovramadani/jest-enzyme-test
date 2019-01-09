import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/Button'
import './App.less'
import logo from '../../public/image/forstek_logo.png'
import grass from '../../public/image/grass.jpg'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			text: ''
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='barrier'>
					<div className='welcome-words'>
						<img src={logo} />
						<p>Hi, welcome to Forstek!</p>
						<p>What can we do for you?</p>
					</div>
					<div className='cta-button'>
						<Button text='create website' onClick={() => alert('hello!')}/>
						<Button text='visit App Congress' onClick={this.visitAppCongress.bind(this)}/>
						<Button text='market research' onClick={this.visitMarketResearch.bind(this)}/>
						<Button text='join Forstek' onClick={this.joinForstek.bind(this)}/>
					</div>
					<p>{this.state.text}</p>
				</div>
			</div>
		)
	}

	visitAppCongress() {
		this.setState({ text: 'visit app congress' })
	}

	visitMarketResearch () {
		this.setState({ text: 'visit market research' })
	}

	joinForstek () {
		this.setState({ text: 'join forstek' })
	}
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);