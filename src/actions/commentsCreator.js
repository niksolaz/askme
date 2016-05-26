import {

	GET_COMMENT_PENDING,
	GET_COMMENT_SUCCESS,
	GET_COMMENT_ERROR,
	GET_COMMENTS_PENDING,
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_ERROR,

}from './actionTypes';

import  * as dataService from '../services/api'

function getCommentsSuccess(statuses){
	return {
		type: GET_COMMENTS_SUCCESS,
		statuses
	}
}

function getCommentPending(){
	return {
		type: GET_COMMENT_PENDING
	};
}

function getCommentError(error){
	return {
		type : GET_COMMENT_ERROR,
		error
	};
}

function getCommentSuccess(message){
	console.log("Success", message);
	return {
		type: GET_COMMENT_SUCCESS,
		message
	}
}

export function getCommentsStatuses(){
	return (dispatch, getState) => {

		dispatch(getCommentsPending());
		dataService.getCommentsStatuses()
			.then((statuses) => dispatch(getCommentsSuccess(statuses)))
			.catch((error) => dispatch(getCommentsError(error)))
	};
}


export function getCommentStatus(id){
	return (dispatch, getState) => {
		dispatch(getCommentPending());

		dataService.getCommentStatus(id)
			.then((status) => dispatch(getCommentSuccess(status)))
			.catch((error) => dispatch(getCommentError(error)))
	};
}