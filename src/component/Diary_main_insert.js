import React, { Component } from 'react'

const Diary_main_insert = (ComposedComponent) =>
	class Diary_main_insert extends Component{
		constructor(props){
			super(props)
			this.onSubmit = this.onSubmit.bind(this)
			this.getTodayIntoString = this.getTodayIntoString.bind(this)
		}
		getTodayIntoString(){
			const date = new Date()
			return (`${date.getMonth()+1}월 ${date.getDate()}일`)
		}
		onSubmit(e){
			const { posts, addPost, title, content, changeTitleContent } = this.props
			const { getTodayIntoString } = this

			if(title && content){
				e.preventDefault()
				const post = {
					id:(posts.length+1),
					title:title,
					content:content,
					date:getTodayIntoString()
				}
				addPost(post)
				changeTitleContent('', '', 0)
			}
		}
		render(){
			const { onSubmit } = this
			const { title, content, onChange, onUpdateId } = this.props

			return (
				<ComposedComponent letter="등록" onSubmit={onSubmit} {...this.props}/>
			)
		}
	}

export default Diary_main_insert
