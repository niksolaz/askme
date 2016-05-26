import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import TopicQuestion from './TopicQuestion.jsx'

export default class TopicQuestions extends Component {

  render() {
    return (
      <div className="TopicQuestions" style={{marginBottom:30}}>
        <TopicQuestion />
      </div>
    );
  }

}
