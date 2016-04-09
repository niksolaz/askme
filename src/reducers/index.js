import { combineReducers } from 'redux';
import QuestionMessages from './question_reducer';
import AnswersMessages from './answers_reducer';


const rootReducer = combineReducers({
	questionMessages,
	answersMessages
});


export default rootReducer;