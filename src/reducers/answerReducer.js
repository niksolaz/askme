import {
	UPVOTE_ANSWER_SUCCESS,
  UPVOTE_ANSWER_ERROR,
  UPVOTE_ANSWER_PENDING
} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	answer: {}
};

// This is the reducer for a single answer
export default function answersMessages(state = initialState, action){
	switch (action.type){
		case UPVOTE_ANSWER_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case UPVOTE_ANSWER_SUCCESS:

			return {
				...state,
				isLoading: false,
				messages: action.answer
			}
			break;
		case UPVOTE_ANSWER_ERROR:
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



case UPVOTE_ANSWERS_SUCCESS:{
  return {
    ...state,

  }
}
