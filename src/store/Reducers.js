export const chat = (state={}, action) => {
	switch(action.type){
		case "SET_MY_NAME":
			return {
				...state,
				my_name : action.my_name
			}
		case "ADD_TT_NAME":
			return {
				...state,
				tt_name : action.tt_name
			}
		case "REMOVE_TT_NAME":
			return {
				...state,
				tt_name : state.tt_name.filter( name => name !== action.tt_name )
			}
		case "SET_SD_MESSAGES":
			return {
				...state,
				sd_messages : action.sd_messages
			}
		case "ADD_GT_MESSAGES":
			return {
				...state,
				gt_messages : [...state.gt_messages, action.gt_messages]
			}
		default:
			return state
	}
}


export const chooseControl = (state={}, action) => {
	switch(action.type){
		case "UPDATE_MESSAGES":
			return {
				...state,
				messages : action.messages
			}
		case "UPDATE_CURR_CONTROL":
			return {
				...state,
				currControl: action.currControl
			}
		default:
			return state
	}
}

export const diary = (state={}, action) => {
	switch(action.type){
		case 'ADD_POST':
			return {
				posts:[
					...state.posts,
					action.post
				]
			}
		case 'UPDATE_POST':
			return {
				posts:[
					...state.posts.map(
						post => ( post.id !== action.id ) ?
								post :
								{
									...post,
									title:action.title,
									content:action.content,
									date:action.date
								}
						)
					]
				}
		case 'REMOVE_POST':
			return {
				posts:[
					...state.posts.filter( post => post.id !== action.id )
				]
			}
		default:
			return state
	}
}

export const movie = (state={}, action) => {
	switch(action.type){
		case 'UPDATE_RESPONSE':
			return {
				...state,
				response:action.response
			}
		case 'UPDATE_LOADING':
			return {
				...state,
				loading:action.loading
			}
		default:
			return state
	}
}

export const game = (state={}, action) => {
	switch(action.type){
		case "ADD":
			return {
				...state,
				win_lose:[action.win_lose, ...state.win_lose]
			}
		case "UPDATE_CURRENT":
			return {
				...state,
				current : action.current
			}
		case "UPDATE_START_END":
			return {
				...state,
				start : action.start,
				end : action.end
			}
		case "TICK":
			return {
				...state,
				count : state.count - 1
			}
		case "RESET":
			return {
				...state,
				count:-1
			}
		case "RESTART":
			return {
				...state,
				count:3
			}
		default:
			return state;
	}
}
