import React, { Component } from 'react';
import {Link} from 'react-router';
import Answer from './Answer.jsx';

export default class AnswersList extends Component {

  render() {
    return (
      <div className="AnswerItemList">
      	<div className="row">
        	<Answer />
        </div>
      </div>
    );

  }
}
