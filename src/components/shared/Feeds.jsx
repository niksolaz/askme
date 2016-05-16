import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class Feeds extends Component {
  
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Feeds</div>
          <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">Mobile Applications</li>
              <li className="list-group-item">Technology Startups</li>
              <li className="list-group-item">JavaScript (programming lenguage)</li>
              <li className="list-group-item">The internet</li>
              <li className="list-group-item">Science</li>
            </ul>
          </div>
        </div>     	
      </div>
    );
  }

}