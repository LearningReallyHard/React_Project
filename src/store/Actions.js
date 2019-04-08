export const tick = () => ({
	type:"TICK"
})

export const reset = () => ({
	type:"RESET"
})

export const restart = () => ({
	type:"RESTART"
})

export const add = (win_lose) => ({
	type:"ADD",
	win_lose
})

export const updateCurrPage = current => ({
	type:"UPDATE_CURRENT",
	current
})

export const updateStartEndPage = (start, end) => ({
	type:"UPDATE_START_END",
	start,
	end
})

export const updateResponse = response => ({
	type:'UPDATE_RESPONSE',
	response
})

export const updateLoading = loading => ({
	type:'UPDATE_LOADING',
	loading
})

export const addPost = post => ({
	type:'ADD_POST',
	post
})

export const updatePost = (title, content, id, date) => ({
	type:"UPDATE_POST",
	title,
	content,
	id,
	date
})

export const removePost = id => ({
	type:"REMOVE_POST",
	id
})

export const updateMessages = messages => ({
	type:"UPDATE_MESSAGES",
	messages
})

export const updateCurrControl = currControl => ({
	type:"UPDATE_CURR_CONTROL",
	currControl
})

export const setMyName = my_name => ({
	type:"SET_MY_NAME",
	my_name
})

export const addTtName = tt_name => ({
	type:"ADD_TT_NAME",
	tt_name
})

export const removeTtName = tt_name => ({
	type:"REMOVE_TT_NAME",
	tt_name
})

export const setSdMessages = sd_messages => ({
	type:"SET_SD_MESSAGES",
	sd_messages
})

export const addGtMessages = gt_messages => ({
	type:"ADD_GT_MESSAGES",
	gt_messages
})
