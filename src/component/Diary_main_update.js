import React, { Component } from 'react'

const Diary_main_update = (ComposedComponent) =>
	class Diary_main_update extends Component{
		constructor(props){
			super(props)
			this.onSubmit = this.onSubmit.bind(this)
			this.getTodayIntoString = this.getTodayIntoString.bind(this)
		}
		componentDidMount(){
			document.getElementById('title').addEventListener('click', () => document.getElementById('inputs_container').style.display = 'inline')
			document.getElementById('content').addEventListener('click', () => document.getElementById('inputs_container').style.display = 'inline')
		}
		getTodayIntoString(){
			const date = new Date()
			return (`${date.getMonth() + 1}월 ${date.getDate()}일`)
		}
		onSubmit(e){
			const { update_id, title, content, updatePost, changeTitleContent, hideButtons } = this.props
			const { getTodayIntoString } = this

			if(title && content){
				e.preventDefault()
				updatePost(title, content, update_id, getTodayIntoString())
				changeTitleContent(title, content, update_id)
				hideButtons()
			}
		}
		render(){
			const { update_id, title, content, updatePost, changeTitleContent } = this.props
			const { onSubmit } = this

			return(
				<ComposedComponent letter="수정" onSubmit={onSubmit} {...this.props}/>
			)
		}
	}

export default Diary_main_update
