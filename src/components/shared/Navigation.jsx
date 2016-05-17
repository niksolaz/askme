import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import SearchBar from './SearchBar.jsx';

export default class Navigation extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to={'/'} className="navbar-brand">
              <img alt="Brand" src="..." />
                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="my-navbar">
                <SearchBar />
                <ul className="nav navbar-nav">
                
                    <li className="navbar-link"><Link to={'/Question'}>
                      <span className="glyphicon glyphicon-th-list" aria-hidden="true"> Question </span>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/Answers'}>
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"> Answers </span>
                    </Link></li>

                </ul>
            </div>
          </div>
      </nav>
    );
  }

}
