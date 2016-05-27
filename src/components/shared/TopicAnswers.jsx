import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import TopicQuestion from './TopicQuestion.jsx'

export default class TopicAnswers extends Component {

  render() {
    return (
      <div className="TopicAnswers" style={{marginBottom:30}}>
        <div className="row">
          <div className="col-xs-12">
            <h4>Answers</h4>
            <hr />
          </div>
        </div>
        <div className="row Answers">
          <div className="col-xs-12">
            <ul className="unstyled">
              <li>
                <a href="#">Did Perfect.org anticipate that Swift would have been open sourced?</a>
              </li>
              <li>
                <a href="#">How do I a iCarousel 3D with swift?</a>
              </li>
              <li>
                <a href="#">How can I stall all of an iPhone's functions through an iOS app?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
