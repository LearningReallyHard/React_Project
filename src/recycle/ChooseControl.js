import React, { Component } from 'react'

const ChooseControl = ComposedComponent =>
	class ChooseControl extends Component{
		constructor(props){
			super(props)
			this.onKeyDown = this.onKeyDown.bind(this)
			this.change = this.change.bind(this)
			window.addEventListener('keydown', this.onKeyDown)
		}
		componentDidMount(){
			this.menus = document.querySelectorAll('.choose li')
			const { updateMessages } = this.props
			const { menus, change } = this
			let messages = []

			for(let i=0;i<menus.length;i++){
				menus[i].style.listStyle = 'none'
				messages[i] = { 'id' : menus[i].id, message : menus[i].innerHTML}
			}
			updateMessages(messages)
			change(0)
		}
		componentWillUnmount(){
			window.removeEventListener('keydown', this.onKeyDown)
		}
		onKeyDown(e){
			const { change } = this
			const { curr_control, history } = this.props
			const curr_control_li = document.querySelectorAll('.choose li')[curr_control]

			switch(e.keyCode){
				case 13:
					if(curr_control_li.id !== 'go_back'){
						history.push(`/${curr_control_li.getAttribute('id')}`)
					}else{
						window.history.back()
					}
					return
				case 38:
					change(curr_control-1)
					return
				case 40:
					change(curr_control+1)
					return
			}
		}
		change(change_control){
			const { menus } = this
			const { messages, updateMessages, updateCurrControl } = this.props
			const number_of_menus = menus.length
			const curr_control = ( change_control < 0 ) ? n-1 : ( change_control >= n ) ? 0 : change_control
			let temp_messages = []

			for(let i=0;i<number_of_menus;i++){
				( i === curr_control ) ?
				temp_messages[i] = {...messages[i], message : "▶ " + messages[i].message} :
				temp_messages[i] = { ...messages[i], message : messages[i].message }
			}
			updateCurrControl(curr_control)
			updateMessages(temp_messages)
		}
		render(){
			return(
				<ComposedComponent {...this.props}/>
			)
		}
	}
