import React,{ Component } from 'react'

const Diary_main = ({onSubmit, title, content, onChange, letter}) => {
		return(
			<div className="diary_main choose">
				<form onSubmit={e => e.preventDefault()}>
					<div id="inputs_container">
						<input type="submit" className="inputs" id="submit" onClick={onSubmit} value={letter}/>
						<input type="button" className="inputs" id="go_back" onClick={() => window.history.back()} value="뒤로가기"/>
					</div>
					<input type="text" id="title" placeholder="title" value={title} onChange={onChange} autoComplete="off" required/>
					<textarea id="content" id="content" placeholder="Content" value={content} onChange={onChange} required></textarea>
				</form>
			</div>
		)
}

export default Diary_main
