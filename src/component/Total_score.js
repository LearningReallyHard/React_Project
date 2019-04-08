import React, { Component }  from 'react'

class Total_score extends Component{
	shouldComponentUpdate(nextProps, nextState){
		return (this.props.game.win_lose !== nextProps.game.win_lose)
	}
	render(){
		const { game } = this.props
		const win = game.win_lose.filter(value => value === 1)
		const lose = game.win_lose.filter(value => value === -1)
		const same = game.win_lose.filter(value => value === 0)

		return (
			<div className="total_score">
				win : {win.length} |
				same : {same.length} |
				lose : {lose.length}
			</div>
		)
	}
}

export default Total_score
