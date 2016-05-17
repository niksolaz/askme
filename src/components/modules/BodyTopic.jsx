import React, { Component } from 'react';

import Story from '../shared/Story.jsx';
import Feeds from '../shared/Feeds.jsx';
import About from '../shared/About.jsx';
import MostViewedWriters from '../shared/MostViewedWriters.jsx';
import AnswersMessageList from '../modules/AnswersMessageList.jsx';

export default class BodyTopic extends Component {
  render() {
    return (
      <div>
        <div className="row">
        	<div className="col-xs-8 col-lg-4">
        		<Story />
            <Feeds />
        	</div>
          <div className="col-xs-4 col-lg-2"></div>
        	<div className="col-xs-4 col-lg-2">
        		<About />
            <MostViewedWriters />
            <AnswersMessageList />
        	</div>
        </div>
      </div>
    );
  }
}