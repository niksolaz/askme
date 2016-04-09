import {} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	messages: []
};

export default function answersMessages(state = initialState, action){
	switch (action.type){
		case GET_ANSWERS_MESSAGES_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_ANSWERS_MESSAGES_SUCCESS:

			return {
				...state,
				isLoading: false,
				messages: action.answers
			}
			break;
		case GET_ANSWERS_MESSAGES_ERROR:
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