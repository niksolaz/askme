import {

	GET_UPVOTE_PENDING,
	GET_UPVOTE_SUCCESS,
	GET_UPVOTE_ERROR,
} from './actionTypes';

import  * as dataService from '../services/api'


function getUpvotePending(){
	return {
		type: GET_UPVOTE_PENDING
	};
}

function getUpvoteError(error){
	return {
		type : GET_UPVOTE_ERROR,
		error
	};
}

function getUpvoteSuccess(counter){
	return {
		type: GET_COMMENT_SUCCESS,
		counter
	}
}

export function getUpvoteStatus(id){
	return (dispatch, getState) => {
		dispatch(getUpvotePending());

		dataService.getUpvoteStatus(id)
			.then((status) => dispatch(getUpvoteSuccess(status)))
			.catch((error) => dispatch(getUpvoteError(error)))
	};
}