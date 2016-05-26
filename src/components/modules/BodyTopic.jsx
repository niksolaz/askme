import React, { Component } from 'react';

import TopicQuestions from '../shared/TopicQuestions.jsx';
import FeedList from '../shared/FeedList.jsx';
import TopicAbout from '../shared/TopicAbout.jsx';
import MostViewedWriters from '../shared/MostViewedWriters.jsx';
import AnswersMessageList from '../modules/AnswersMessageList.jsx';

export default class BodyTopic extends Component {
  render() {
    return (
      <div>
        <div className="row">
        	<div className="col-xs-8">
            <h4>Topic Questions</h4>
            <hr />
        		<TopicQuestions />

            <h4>Feeds</h4>
            <hr />
            <FeedList topic="Swift" />
        	</div>
        	<div className="col-xs-4">
        		<TopicAbout />
            <MostViewedWriters />
            <AnswersMessageList />
        	</div>
        </div>
      </div>
    );
  }
}
