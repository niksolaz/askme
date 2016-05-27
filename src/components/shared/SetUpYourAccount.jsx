import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class SetUpYourAccount extends Component {

  render() {
    return (
      <div className="SetUpYourAccount">
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Set Up Your Account</h4></div>
          <div className="panel-body">
            <ul className="list-unstyled UserChecklist">
              <li>
                <div className="check-wrapper complete">
                  <span className="check"></span>
                  <span className="check-text">Visit your feed</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper">
                  <span className="check"></span>
                  <span className="check-text">Follow 8 more topics</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper">
                  <span className="check"></span>
                  <span className="check-text">Find your friends on Quora</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper">
                  <span className="check"></span>
                  <span className="check-text">Upvote 5 more good answers</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper complete">
                  <span className="check"></span>
                  <span className="check-text">Ask your first question</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper">
                  <span className="check"></span>
                  <span className="check-text">Add info about what you know</span>
                </div>
              </li>
              <li>
                <div className="check-wrapper complete">
                  <span className="check"></span>
                  <span className="check-text">Answer a question</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
