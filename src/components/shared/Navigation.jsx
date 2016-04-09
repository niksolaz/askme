import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class Navigation extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="my-navbar">
                <ul className="nav navbar-nav">
                    <li className="navbar-link"><Link to={'/Question'}>Question</Link></li>
                    <li className="navbar-link"><Link to={'/Answers'}>Answers</Link></li>
                </ul>
            </div>
          </div>
      </nav>
    );
  }

}
