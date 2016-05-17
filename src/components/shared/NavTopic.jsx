import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class NavTopic extends Component {
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-lg-4">
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="..." alt="..."/>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Apple Swift</h4>
                (programming lenguage)
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-lg-4"></div>
          <div className="col-xs-6 col-lg-4"></div>
        </div>
        <nav className="navbar navbar-default">
            <ul className="nav nav-pills">
              <li role="presentation" className="disabled"><a href="#">Overview</a></li>
              <li role="presentation" className="disabled"><a href="#">Topic FAQ</a></li>
              <li role="presentation" className="disabled"><a href="#">Feed</a></li>
              <li role="presentation" className="disabled"><a href="#">Most Viewed Writers</a></li>
              <li role="presentation" className="disabled"><a href="#">Answer</a></li>
              <li role="presentation" className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  ... <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>Share Topic</li>
                  <li>Manage</li>
                  <li>Monitor FAQ</li>
                  <li>Report</li>
                </ul>
              </li>
              <button className="btn btn-info" type="button">
                Follow Topic <span className="badge">12.8K</span>
              </button>
            </ul>
        </nav>
      </div>
    );
  }

}