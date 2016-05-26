import {
	GET_COMMENTS_PENDING,
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_ERROR
} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	messages: []
};

export default function commentsMessages(state = initialState, action){
	switch (action.type){
		case GET_COMMENTS_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_COMMENTS_SUCCESS:

			return {
				...state,
				isLoading: false,
				messages: action.answers
			}
			break;
		case GET_COMMENTS_ERROR:
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