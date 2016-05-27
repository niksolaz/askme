import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class RelatedTopics extends Component {

  render() {
    return (
      <div className="TopicAnswers" style={{marginBottom:30}}>
        <div className="row">
          <div className="col-xs-12">
            <h4>Related Topics</h4>
            <hr />
          </div>
        </div>
        <div className="row Answers">
          <div className="col-xs-12">
            <ul className="unstyled">
              <li>
                <a href="#">XCode</a>
              </li>
              <li>
                <a href="#">Objective-C</a>
              </li>
              <li>
                <a href="#">iOS Application Development</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
