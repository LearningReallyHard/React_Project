const initialState = {
	chat:{
		my_name:'',
		tt_name:[],
		sd_messages:'',
		gt_messages:[]
	},
	chooseControl:{
		messages:[
			{ id : 'game', message : 'Rock-Paper-Scissros Game'},
			{ id : 'movies', message : 'Searching for Movies'},
			{ id : 'diary', message : 'Diary'},
			{ id : 'chat', message : 'Chat'}
		],
		currControl:0
	},
	game:{
		win_lose:[],
		start:0,
		end:5,
		current:1,
		count:-1
	},
	movie:{
		response:'',
		images:[],
		loading:-1
	},
	diary:{
		posts:[]
	}
}

export default initialState
