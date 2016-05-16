import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class SetUpYourAccount extends Component {
  
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Set Up Your Account</div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">Visit your feed</li>
              <li className="list-group-item">Follow 8 more topics</li>
              <li className="list-group-item">Find your friends on Quora</li>
              <li className="list-group-item">Upvote 5 more good answers</li>
              <li className="list-group-item">Ask your first question</li>
              <li className="list-group-item">Add info about what you know</li>
              <li className="list-group-item">Answer a question</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}