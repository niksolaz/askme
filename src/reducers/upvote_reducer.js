import {
	GET_UPVOTE_PENDING,
	GET_UPVOTE_SUCCESS,
	GET_UPVOTE_ERROR
} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	counter : false
};

export default function upvoteCounter(state = initialState, action){
	switch (action.type){
		case GET_UPVOTE_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_UPVOTE_SUCCESS:

			return {
				...state,
				isLoading: false,
				counter: true
			}
			break;
		case GET_UPVOTE_ERROR:
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