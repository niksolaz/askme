import { combineReducers } from 'redux';
import QuestionMessages from './question_reducer';
import AnswersMessages from './answers_reducer';
import CommentsMessages from './comments_reducer';
import UpvoteCounter from './upvote_reducer';


const rootReducer = combineReducers({
	QuestionMessages,
	AnswersMessages,
	CommentsMessages,
	UpvoteCounter
});


export default rootReducer;