import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class About extends Component {
  
  render() {
    return (
      <div>
        <div>
          About
          <p>Swift is an open source programming language<br/>
             developed by Apple.
          </p>
        </div> 
        <div>
          <nav>
            <ul className="pagination pagination-lg">
              <li>
                <span className="badge">2.3k<br/><a href="#">Questions</a></span>
              </li>
              <li>
                <span className="badge">12.3k<br/><a href="#">Followers</a></span>
              </li>
              <li>
                <span className="badge">40<br/><a href="#">Edits</a></span>
              </li>
            </ul>
          </nav> 
        </div>   	
      </div>
    );
  }

}