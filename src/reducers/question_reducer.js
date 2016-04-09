import {} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	messages: []
};

export default function questionMessages(state = initialState, action){
	switch (action.type){
		case GET_QUESTION_MESSAGES_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_QUESTION_MESSAGES_SUCCESS:
			return {
				...state,
				isLoading: false,
				messages: action.statuses
			}
			break;
		case GET_QUESTION_MESSAGES_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error
			}

		default:
			break;
	}
	return state;
}