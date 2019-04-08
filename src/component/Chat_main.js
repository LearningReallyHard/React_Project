import React, { Component } from 'react'
import '../style/chat.css'
import io from 'socket.io-client'

class Chat_main extends Component{
	constructor(props){
		super(props)
		this.send = this.send.bind(this)
		this.onChange = this.onChange.bind(this)
		this.socket = io('http://54.180.108.235:3000')
	}
	componentDidMount(){
		const { setSdMessages, gt_messages, tt_name, setMyName, addTtName, addGtMessages, removeTtName } = this.props
		const { socket } = this
		let my_name = ''
		while(!my_name){
			my_name = prompt(`what's your name?`)
		}
		setMyName(my_name)
		socket.emit('join', my_name)

		socket.on('join', (name, people_lists) => {
			addTtName(people_lists)
			addGtMessages(`${name} just joined this room`)
		})
		socket.on('leave', name => {
			console.log('leave' + 'name : ' + name)
			removeTtName(name)
			addGtMessages(`${name} just left this room`)
		})
		socket.on('chat messages', msg => {
			addGtMessages(msg)
			const messages = document.getElementById('messages')
			messages.scrollTo(0, messages.scrollHeight)
		})
	}
	onChange(e){
		const { setSdMessages } = this.props
		setSdMessages(e.target.value)
	}
	send(e){
		const { m } = this.refs
		const { gt_messages, my_name, setSdMessages, addGtMessages } = this.props
		const { socket } = this

		socket.emit('chat messages', `${my_name} : ${m.value}`)
		setSdMessages('')
		e.preventDefault()
	}
	render(){
		const { send, onChange } = this
		const { my_name, tt_name, gt_messages, sd_messages } = this.props
		const render_people_lists = tt_name.map(
			(name, i) => ( name === my_name ) ? '' :
						<li key={i}>{name}</li>
		)
		const render_messages = gt_messages.map(
			(message, i) => <li key={i}>{message}</li>
		)

		return(
			<div className="chat_main">
				<section id="top">
					<ul id="people_lists">
						<li>참가자</li>
						<li>{my_name}(me)</li>
						{render_people_lists}
					</ul>
					<ul id="messages">
						{render_messages}
					</ul>
				</section>
				<form id="bottom" onSubmit={send}>
					<input type="text" id="input_message" ref="m" autoComplete="off" value={sd_messages} onChange={onChange} required/>
					<button>Send</button>
					<input type="button" value="Go Back" onClick={() => window.history.back()}/>
				</form>
			</div>
		)
	}
}

export default Chat_main
