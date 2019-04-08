import React from 'react'
import '../style/game.css'
import {
	Rock_scissors_paper_c,
	Total_score_c,
	Board_score_c
} from '../container/Containers'

const Game = () => {
	return(
		<div className="game">
			<div className="gamearea">
				<Rock_scissors_paper_c/>
				<Board_score_c/>
			</div>
			<Total_score_c/>
			<ul>
				<button onClick={() => window.location.href = '/'}>Go Back</button>
			</ul>
		</div>
	)
}

export default Game
