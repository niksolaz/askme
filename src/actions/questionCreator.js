import {
	GET_QUESTION_MESSAGES_PENDING,
 	GET_QUESTION_MESSAGES_SUCCESS,
 	GET_QUESTION_MESSAGES_ERROR,
 	GET_QUESTION_MESSAGE_PENDING,
 	GET_QUESTION_MESSAGE_SUCCESS,
 	GET_QUESTION_MESSAGE_ERROR,

}from './actionTypes';

import  * as dataService from '../services/api'


function getQuestionMessagesPending(){
	return {
		type: GET_QUESTION_MESSAGES_PENDING
	};
}

function getQuestionMessagesError(error){
	return {
		type: GET_QUESTION_MESSAGES_ERROR,
		error
	}
}

function getQuestionMessagesSuccess(statuses){
	return {
		type: GET_QUESTION_MESSAGES_SUCCESS,
		statuses
	}
}

function getQuestionMessagePending(){
	return {
		type: GET_QUESTION_MESSAGE_PENDING
	};
}

function getQuestionMessageError(error){
	return {
		type : GET_QUESTION_MESSAGE_ERROR,
		error
	};
}

function getQuestionMessageSuccess(message){
	console.log("Success", message);
	return {
		type: GET_QUESTION_MESSAGE_SUCCESS,
		message
	}
}

export function getQuestionStatuses(){
	return (dispatch, getState) => {

		dispatch(getQuestionkMessagesPending());
		dataService.getQuestionStatuses()
			.then((statuses) => dispatch(getQuestionMessagesSuccess(statuses)))
			.catch((error) => dispatch(getQuestionMessagesError(error)))
	};
}


export function getQuestionStatus(id){
	return (dispatch, getState) => {
		dispatch(getQuestionMessagePending());

		dataService.getQuestionStatus(id)
			.then((status) => dispatch(getQuestionMessageSuccess(status)))
			.catch((error) => dispatch(getQuestionMessageError(error)))
	};
}