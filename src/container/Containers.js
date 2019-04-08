import { connect } from 'react-redux'
import Rock_scissors_paper from '../component/Rock_scissors_paper'
import Total_score from '../component/Total_score'
import Board_score from '../component/Board_score'
import Movies_list from '../component/Movies_list'
import Diary_lists from '../component/Diary_lists'
import Diary_main from '../component/Diary_main'
import Diary_main_insert from '../component/Diary_main_insert'
import Diary_main_update from '../component/Diary_main_update'
import Chat_main from '../component/Chat_main'
import Home from '../route/Home'
import {
	tick,
	reset,
	restart,
	add,
	updateCurrPage,
	updateStartEndPage,
	updateResponse,
	updateLoading,
	addPost,
	updatePost,
	removePost,
	updateMessages,
	updateCurrControl,
	setMyName,
	addTtName,
	removeTtName,
	setSdMessages,
	addGtMessages
 } from '../store/Actions'

export const Chat_main_c = connect(
	state => ({
		my_name:state.chat.my_name,
		tt_name:state.chat.tt_name,
		sd_messages:state.chat.sd_messages,
		gt_messages:state.chat.gt_messages
	}),
	dispatch => ({
		setMyName(my_name){
			dispatch(setMyName(my_name))
		},
		addTtName(tt_name){
			dispatch(addTtName(tt_name))
		},
		removeTtName(tt_name){
			dispatch(removeTtName(tt_name))
		},
		setSdMessages(sd_messages){
			dispatch(setSdMessages(sd_messages))
		},
		addGtMessages(gt_messages){
			dispatch(addGtMessages(gt_messages))
		}
	})
)(Chat_main)

export const Home_c = connect(
	state => ({
		currControl:state.chooseControl.currControl,
		messages:state.chooseControl.messages
	}),
	dispatch => ({
		updateMessages(messages){
			dispatch(updateMessages(messages))
		},
		updateCurrControl(curr_control){
			dispatch(updateCurrControl(curr_control))
		}
	})
)(Home)

export const Diary_lists_c = connect(
		(state, props) => ({
			posts:state.diary.posts
		}),
		dispatch => ({
			removePost(id){
				dispatch(removePost(id))
			}
		})
	)(Diary_lists)

export const Diary_main_update_c = connect(
	(state, props) => ({
		posts:state.diary.posts
	}),
	dispatch => ({
		updatePost(title, content, id, date){
			dispatch(updatePost(title, content, id, date))
		}
	})
	)(Diary_main_update(Diary_main))

export const Diary_main_insert_c = connect(
		(state, props) => ({
			posts:state.diary.posts
		}),
		dispatch => ({
			addPost(post){
				dispatch(addPost(post))
			}
		})
	)(Diary_main_insert(Diary_main))

export const Movies_list_c = connect(
		state => ({
			loading:state.movie.loading,
			response:state.movie.response
		}),
		dispatch => ({
			updateLoading(loading){
				dispatch(updateLoading(loading))
			},
			updateResponse(response){
				dispatch(updateResponse(response))
			}
		})
	)(Movies_list)

export const Rock_scissors_paper_c = connect(
		state => ({
			count:state.game.count
		}),
		dispatch => ({
			tick(){
				dispatch(tick())
			},
			reset(){
				dispatch(reset())
			},
			restart(){
				dispatch(restart())
			},
			add(win_lose){
				dispatch(add(win_lose))
			}
		})
	)(Rock_scissors_paper)

export const Total_score_c = connect(
	state => ({
		game:state.game
	})
	)(Total_score)

export const Board_score_c = connect(
	state => ({
		game:state.game
	}),
	dispatch => ({
		updateCurrPage(current){
			dispatch(updateCurrPage(current))
		},
		updateStartEndPage(start, end){
			dispatch(updateStartEndPage(start, end))
		}
	})
	)(Board_score)
