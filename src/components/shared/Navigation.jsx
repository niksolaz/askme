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

                    <li className="navbar-link"><Link to={'/'}>
                      <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/Question'}>
                      <span className="glyphicon glyphicon-bullhorn" aria-hidden="true"> Question </span>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/Answers'}>
                      <span className="glyphicon glyphicon-th-list" aria-hidden="true"> Answers </span>
                    </Link></li>

                </ul>
            </div>
          </div>
      </nav>
    );
  }

}
