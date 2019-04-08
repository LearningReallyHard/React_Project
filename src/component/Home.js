import React from 'react'
import ChooseControl from '../recycle/ChooseControl'
import '../style/home.css'

const Home = () =>
	<div className="home">
		<ul className="choose">
			<li>Rock-Paper-Scissros Game</li>
			<li>Library</li>
			<li>Ranking of Naver Searching</li>
		</ul>
	</div>

export default ChooseControl(Home)
