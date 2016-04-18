import * as answerAction from './answerCreator';
import * as questionAction from './questionCreator';

function getMessage(social, id){
	switch(social.toLowerCase()){
		case "answer":
			return answerAction.getAnswer(id);
			break;
		case "question":
			return questionAction.getQuestionStatus(id);
			break;
		default:
			console.log("not defined yet");
	}
}

module.exports = {
	...answerAction,
	...questionAction,
	getMessage
}