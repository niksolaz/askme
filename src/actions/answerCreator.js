import {
	GET_ANSWERS_MESSAGES_PENDING,
	GET_ANSWERS_MESSAGES_SUCCESS,
	GET_ANSWERS_MESSAGES_ERROR,
	GET_ANSWERS_MESSAGE_PENDING,
	GET_ANSWERS_MESSAGE_SUCCESS,
	GET_ANSWERS_MESSAGE_ERROR,
	UPVOTE_ANSWERS_PENDING,
	UPVOTE_ANSWERS_SUCCESS,
	UPVOTE_ANSWERS_ERROR
} from './actionTypes';

import  * as dataService from '../services/api'

/**
 Actions
*/
function getAnswersPending(){
	console.log("Answers pending...");
	return {
		type: GET_ANSWERS_MESSAGES_PENDING
	};
}

function getAnswersError(error){
	console.log("Answers error...");
	return {
		type: GET_ANSWERS_MESSAGES_ERROR,
		error
	};
}

function getAnswersSuccess(Answers){
	console.log("Answers success...", Answers);
	return {
		type: GET_ANSWERS_MESSAGES_SUCCESS,
		tweets
	};
}

function getAnswersMessagePending(){
	return {
		type: GET_ANSWERS_MESSAGE_PENDING
	};
}

function getAnswersMessageError(error){
	return {
		type : GET_ANSWERS_MESSAGE_ERROR,
		error
	};
}

function getAnswersMessageSuccess(message){
	console.log("Success", message);
	return {
		type: GET_ANSWERS_MESSAGE_SUCCESS,
		message
	}
}

function upvoteAnswersPending(){
	return {
		type: UPVOTE_ANSWERS_PENDING,
	}
}

function upvoteAnswersError(error){
	return {
		type: UPVOTE_ANSWERS_ERROR,
		error
	}
}

function upvoteAnswersSuccess(answer){
	return {
		type: UPVOTE_ANSWERS_SUCCESS,
		answer
	}
}

/**
 Actions used from the view
*/
export function getAnswers(){
	return (dispatch, getState) => {

		dispatch(getAnswersPending());
		dataService.getAnswers()
			.then((Answers) => dispatch(getAnswersSuccess(Answers)))
			.catch((error) => dispatch(getAnswersError(error)))
	};
}
export function getAnswer(id){
	return (dispatch, getState) => {
		dispatch(getAnswersMessagePending());

		dataService.getAnswer(id)
			.then((message) => dispatch(getAnswersMessageSuccess(message)))
			.catch((error) => dispatch(getAnswersMessageError(error)))
	};
}

export function upvoteAnswer(id){
	return (dispatch, getState) =>{
		dispatch(upvoteAnswersPending());
		dataService.upvoteAnswer(id)
		.then((message) => {
			dispatch(upvoteAnswersSuccess(message.updated)
		}))
		.catch((error) => dispatch(upvoteAnswersError(error)))
	}
}
