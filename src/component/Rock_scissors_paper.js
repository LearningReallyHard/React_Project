import React, { Component } from 'react'
import '../style/rock_scissors_paper.css'

class Rock_scissors_paper extends Component{
	constructor(props){
		super(props)
		this.onClick = this.onClick.bind(this)
		this.getResult = this.getResult.bind(this)
		this.keyHandler = this.keyHandler.bind(this)
		this.startTimer = this.startTimer.bind(this)
		this.getRandomImages = this.getRandomImages.bind(this)
		this.loading = false
	}
	componentDidMount(){
		const targets = document.querySelectorAll('.choose_inputs input')
		const { onClick } = this

		targets[0].parentNode.className += 'border'
		targets[0].focus()
		for(let i=0;i<targets.length;i++){
			targets[i].addEventListener('click', onClick)
		}
		window.addEventListener('keydown', this.keyHandler)
	}
	componentWillUnmount(){ // 언마운트 되기 전, 존재하는 타이머, 이벤트 삭제 및 카운트 -1 초기화
		const { tickTimer, win_lose_apply_timer, loading, keyHandler } = this
		const { reset } = this.props

		clearTimeout(tickTimer)
		clearTimeout(win_lose_apply_timer)
		window.removeEventListener('keydown', keyHandler)
		loading = false
		reset()
	}
	shouldComponentUpdate(nextProps, nextState){
		return this.props.count !== nextProps.count
	}
	keyHandler(e){
		const { scissors, rock, paper } = this.refs
		const { restart, add } = this.props

		if(!this.loading){
			if(e.keyCode === 32 && Object.keys(this.refs).length !== 0){
				e.preventDefault()
				if(scissors.checked || rock.checked || paper.checked){
					restart()
					this.win_lose_apply_timer = setTimeout(() => add(this.win_lose), 3200)
				}else{
					alert('Choose One!')
				}
			}
		}else{
			e.preventDefault()
		}
	}
	onClick(e){ // 패 선택시 핸들러
		if(this.loading){
			e.preventDefault()
		}else{
			const inputs = document.querySelectorAll('.choose_inputs li')
			for(let i=0;i<inputs.length;i++)
				inputs[i].className = ''
			e.target.parentNode.className += 'border'
		}
	}
	getResult(element){ // 난수 발생해서 랜덤 이미지 리턴
		const rand = Math.floor(Math.random()*3)+1
		let chosen_img

		if(rand === 1){ // rock
			this.win_lose = (element === 'scissors') ? 1 : (element === 'paper') ? 0 : -1
			chosen_img = <img src={require('../images/paper.png')}/>
		}
		else if(rand === 2){ // scissors
			this.win_lose = (element === 'scissors') ? -1 : (element === 'paper') ? 1 : 0
			chosen_img = <img src={require('../images/rock.png')}/>
		}
		else if(rand === 3){ // paper
			this.win_lose = (element === 'scissors') ? 0 : (element === 'paper') ? -1 : 1
			chosen_img = <img src={require('../images/scissors.png')}/>
		}

		return chosen_img
	}
	startTimer(){
		const { tick } = this.props

		this.tickTimer = setTimeout(tick, 1000)
		this.loading = true
	}
	getRandomImages(){
		this.loading = false
		for(let key in this.refs){
			if(this.refs[key].checked)
				return this.refs[key].id
		}
	}
	render(){
		const { count, reset } = this.props
		const { randomImages, onRestart, startTimer, getRandomImages, getResult } = this
		let randomImage

		( count > 0) ? startTimer() :
		randomImage = getRandomImages()

		return (
			<div className="rock_scissors_paper">
				<div className="count">
					<div>
					{
						(count > 0) ? count :
							(count === -1) ? "" : getResult(randomImage)
					}
					</div>
				</div>
				<ul className="choose_inputs">
					<li>
						<label htmlFor="scissors"><img src={require('../images/scissors.png')}/></label><br/>
						<input type="radio" name="choose" ref='scissors' id="scissors"/>
					</li>
					<li>
						<label htmlFor="rock"><img src={require('../images/rock.png')}/></label><br/>
						<input type="radio" name="choose" ref='rock' id="rock"/>
					</li>
					<li>
						<label htmlFor="paper"><img src={require('../images/paper.png')}/></label><br/>
						<input type="radio" name="choose" ref='paper' id="paper"/>
					</li>
				</ul>
			</div>
		)
	}
}

export default Rock_scissors_paper
