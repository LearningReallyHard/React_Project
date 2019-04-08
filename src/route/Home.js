import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/home.css'

class Home extends Component{
	constructor(props){
		super(props)
		this.onKeyDown = this.onKeyDown.bind(this)
		this.change = this.change.bind(this)
		this.change(0)
		window.addEventListener('keydown', this.onKeyDown)
	}
	componentWillUnmount(){
		window.removeEventListener('keydown', this.onKeyDown)
	}
	onKeyDown(e){
		const { currControl, messages, history } = this.props
		const { change } = this
		const currControlLi = document.querySelectorAll('.choose li')[currControl]

		switch(e.keyCode){
			case 13:
				history.push(`/${messages[currControl].id}`)
				return
			case 38:
				change(currControl-1)
				return
			case 40:
				change(currControl+1)
				return
		}
	}

	change(changeControl){
		const { messages, updateCurrControl, updateMessages } = this.props
		const temp_currControl = ( changeControl < 0 ) ? messages.length -1 : ( changeControl >= messages.length ) ? 0 : changeControl
		let temp_messages = []

		for(let i=0;i<messages.length;i++){
			( i === temp_currControl ) ?
			temp_messages[i] = { ...messages[i], message : "▶ " + messages[i].message.replace("▶ ",'')} :
			temp_messages[i] = { ...messages[i], message : messages[i].message.replace("▶ ","") }
		}
		updateCurrControl(temp_currControl)
		updateMessages(temp_messages)
	}

	render(){
		const { messages } = this.props
		const render_messages = messages.map(
			(msg, i) => {
				const link = `/${msg.id}`
				return (
					<li key={i} id={msg.id}><Link id="link" to={link}>{msg.message}</Link></li>
				)
			}
		)

		return (
			<div className="home">
				<ul className="choose">
					{render_messages}
				</ul>
			</div>
		)
	}
}

export default Home
