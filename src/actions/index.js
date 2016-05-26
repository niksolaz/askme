import * as answerAction from './answerCreator';
import * as questionAction from './questionCreator';
import * as commentAction from './commentsCreator.js'; 
import * as upvoteAction from './upvoteCreator.js';

function getMessage(social, id){
	switch(social.toLowerCase()){
		case "answer":
			return answerAction.getAnswer(id);
			break;
		case "question":
			return questionAction.getQuestionStatus(id);
			break;
		case "comment":
			return commentAction.getCommentStatus(id);
			break;
		case "upvote":
			return upvoteAction.getUpvoteStatus(id);
			break;
		default:
			console.log("not defined yet");
	}
}

module.exports = {
	...answerAction,
	...questionAction,
	...commentAction,
	...upvoteAction,
	getMessage
}