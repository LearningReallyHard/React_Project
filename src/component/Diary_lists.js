import React from 'react'

const Diary_lists = ({posts, changeTitleContent, hideButtons, removePost}) => {
	const mousemove = id => {
		document.querySelector(`#list${id} .title span:nth-child(2)`).style.display = 'inline'
	}
	const mouseout = id => {
		document.querySelector(`#list${id} .title span:nth-child(2)`).style.display = 'none'
	}
	const onPostClick = (title, content, id) => {
		changeTitleContent(title, content, id)
		hideButtons()
	}

	const render_posts = posts.map(
			post => <li key={post.id} id={"list"+post.id} onMouseMove={() => mousemove(post.id)} onMouseOut={() => mouseout(post.id)}>
						<div className="title"><span onClick={() => onPostClick(post.title, post.content, post.id)}>{post.title}</span><span onClick={() => removePost(post.id)}>x</span></div>
						<div className="content"><span onClick={() => onPostClick(post.title, post.content, post.id)}>{post.content}</span></div>
						<div className="date">{post.date}</div>
					</li>
		)
	return(
		<ul className="diary_lists">
			<li onClick={() => changeTitleContent('','',0)}>Add Diary</li>
			<ul>
				{render_posts.reverse()}
			</ul>
		</ul>
	)
}

export default Diary_lists
