import React, { Component } from 'react'
import '../style/board_score.css'

class Board_score extends Component {
	constructor(props){
		super(props)
		this.onPrev = this.onPrev.bind(this)
		this.onNext = this.onNext.bind(this)
	}
	onPrev(){
		const { start, end, current } = this.props.game
		const { updateCurrPage, updateStartEndPage } = this.props

		if(current === 1) return alert('No Page')
		if(current % 5 === 1){
			const s = start - 5
			const e = end - 5
			updateStartEndPage(s, e)
		}
		updateCurrPage( current - 1 )
	}
	onNext(total_page){
		const { start, end, current } = this.props.game
		const { updateCurrPage, updateStartEndPage } = this.props

		if( current === total_page) return alert('No Page')
		if( current % 5 === 0){
			const s = start + 5
			const e = end + 5
			updateStartEndPage(s, e)
		}
		updateCurrPage( current + 1 )
	}
	shouldComponentUpdate(nextProps){
		return this.props.game !== nextProps.game
	}
	render(){
		const { start, end, current, win_lose } = this.props.game
		const { updateCurrPage, updateStartEndPage } = this.props
		const { onPrev, onNext } = this

		const per = 5 // 한페이지에 보여줄 게시글 수
		const total_page = Math.ceil( (win_lose.length || 1) / per) // 총 페이지 수
		const arr = []
		for(let i=0;i<total_page;i++)
			arr.push(i+1)
		const curr_page = arr.slice(start, end) // 실제 출력될 페이지들 자르기
		const render_page = curr_page.map( // 실제 출력될 페이지들의 리액트 엘리멘트들을 가지고 있음
				page => <span className={(current===page) ? 'border' : ''} key={page} id={page} onClick={() => updateCurrPage(page)}>{page}</span>
			)

		const indexOfLastPage = ( per * current )
		const indexOfFirstPage = ( indexOfLastPage - per )
		const curr_win_lose = win_lose.slice(indexOfFirstPage, indexOfLastPage)
		const render_win_lose = curr_win_lose.map(
				(value, i) => <li key={i}><p>{(win_lose.length - indexOfFirstPage) - i}</p><p>{(value === 1) ? 'O' : 'X'}</p><p>{(value === 0) ? 'O' : 'X'}</p><p>{(value === -1) ? 'O' : 'X'}</p></li>
			)
		return(
			<div className="board_score">
				<ul>
					<li><p>No</p><p>WIN</p><p>SAME</p><p>LOSE</p></li>
					{render_win_lose}
				</ul>
				<div className="pages">
					<span onClick={onPrev}>Prev</span>
					{render_page}
					<span onClick={() => onNext(total_page)}>Next</span>
				</div>
			</div>
		)
	}
}

export default Board_score
