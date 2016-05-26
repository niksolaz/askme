import _ from 'lodash';

const answers = [
	{
		id:"1",
		messageText: 'Hello World'

	},
	{
		id:"2",
		messageText: 'This is a new message'
	},
	{
		id:"2",
		messageText: 'I am Margot , girlfriend of Lupin'
	},
];
const questionStatuses = [
	{
		id:"3",
		messageText: 'Hello from Facebook?'
	},
	{
		id:"4",
		messageText: 'Bla bla bla?'
	},
	{
		id:"5",
		messageText: 'Hello, I am Dylan..Bob Dylan?'
	},
];

export function getAnswers(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve.bind(null, answers), 2000);
	});
}

export function getQuestionStatuses(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve.bind(null, questionStatuses), 5000);
	});
}

export function getCommentsStatuses(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve.bind(null, commentsStatuses), 5000);
	});
}


export function getAnswer(myId){
	return new Promise((resolve, reject) => {
		const message = _.find(Answers, {id: myId});

		if (message){
			resolve(message);
		}else{
			reject("Message not found");
		}

	});
}

export function getQuestionStatus(myId){
	return new Promise((resolve, reject) => {

		const message = _.find(questionStatuses, {id:myId});
		if (message){
			resolve(message);
		}else{
			reject("Message not found");
		}

	});
}

export function getCommentStatus(myId){
	return new Promise((resolve, reject) => {

		const message = _.find(commentStatuses, {id:myId});
		if (message){
			resolve(message);
		}else{
			reject("Message not found");
		}

	});
}

