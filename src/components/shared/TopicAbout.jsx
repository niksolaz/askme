import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TopicAbout extends Component {

  render() {
    return (
      <div className="TopicAbout">
        <div className="row">
          <div className="col-xs-12">
            About
            <p>Swift is an open source programming language<br/>
               developed by Apple.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <span>2.3k <a href="#">questions</a></span>
          </div>
          <div className="col-xs-4">
            <span>12.3k <a href="#">followers</a></span>
          </div>
          <div className="col-xs-4">
            <span>40 <a href="#">edits</a></span>
          </div>
        </div>

      </div>
    );
  }

}
