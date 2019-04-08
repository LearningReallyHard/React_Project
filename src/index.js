import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
	game,
	movie,
	diary,
	chooseControl,
	chat
} from './store/Reducers'
import initialState from './store/initialState'
import {
	Game,
	Diary,
	Movies,
	Chat,
} from './route/index'
import { Home_c } from './container/Containers'
import './style/index.css'

const store = createStore(combineReducers({game, movie, diary, chooseControl, chat}),
	initialState)

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<div className="main">
				<Route exact path="/" component={Home_c}/>
				<Route path="/game" component={Game}/>
				<Route path="/diary" component={Diary}/>
				<Route path="/movies" component={Movies}/>
				<Route path="/chat" component={Chat}/>
			</div>
		</HashRouter>
	</Provider>
	,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
 serviceWorker.unregister();
