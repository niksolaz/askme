import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class Feeds extends Component {
  
  render() {
    return (
      <div className="feeds">
        <div className="row">
          <div className="col-xs-4">
            <span style={{fontWeight:'bold'}}>Feeds</span>
          </div>
          <div className="col-xs-3 col-xs-offset-5">
            <span style={{fontWeight:'bold'}}>Edit</span>
          </div>
        </div>
        <div className="row">
          <hr style={{marginTop:0, marginBottom:5}}/>
        </div>
        <div className="row">
          <ul className="feed-list">
            <li><Link to="/pinned/mobile-applications">Mobile Applications</Link></li>
            <li><Link to="/pinned/technology-startups">Technology Startups</Link></li>
            <li><Link to="/pinned/javascript">JavaScript (programming language)</Link></li>
            <li><Link to="/pinned/the-internet">The internet</Link></li>
            <li><Link to="/pinned/science">Science</Link></li>
          </ul>   
        </div>         	
      </div>
    );
  }

}