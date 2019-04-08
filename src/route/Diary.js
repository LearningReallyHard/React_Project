import React, { Component } from 'react'
import {
	Diary_lists_c,
	Diary_main_insert_c,
	Diary_main_update_c
} from '../container/Containers'
import '../style/diary.css'

class Diary extends Component{
	constructor(){
		super()
		this.state = {
			title:'',
			content:'',
			update_id:0
		}
		this.changeTitleContent = this.changeTitleContent.bind(this)
		this.onChange = this.onChange.bind(this)
		this.hideButtons = this.hideButtons.bind(this)
	}
	onChange(e){
		if(e.target.id === 'title'){
			this.setState({title:e.target.value})
		}else if(e.target.id === 'content'){
			this.setState({content:e.target.value})
		}
	}
	changeTitleContent(title, content, update_id){
		this.setState({title, content, update_id})
	}
	hideButtons(){
		setTimeout(() => document.getElementById('inputs_container').style.display = 'none', 10)
	}
	render(){
		const { title, content, update_id } = this.state
		const { changeTitleContent, onChange, onUpdateId, hideButtons } = this

		return(
			<div className="Diary">
				<Diary_lists_c hideButtons={hideButtons} changeTitleContent={changeTitleContent}/>
				{
					(update_id) ?
					<Diary_main_update_c hideButtons={hideButtons} onChange={onChange} changeTitleContent={changeTitleContent} {...this.state}/> :
					<Diary_main_insert_c onChange={onChange} changeTitleContent={changeTitleContent} {...this.state}/>
				}
			</div>
		)
	}
}

export default Diary
