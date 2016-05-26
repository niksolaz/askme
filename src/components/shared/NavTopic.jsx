import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class NavTopic extends Component {

  render() {
    return (
      <div className="NavigationTopic">
        <div className="row" style={{marginBottom:15}}>
          <div className="col-xs-2">
            <img className="img-circle" src="http://placehold.it/150x150" alt="..."/>
          </div>
          <div className="col-xs-10">
            <h1 className="title">Apple Swift</h1>
            <div className="description">(Programming Language)</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <nav className="navbar navbar-default">
                <ul className="nav nav-pills">
                  <li><a href="#">Overview</a></li>
                  <li><a href="#">Topic FAQ</a></li>
                  <li><a href="#">Feed</a></li>
                  <li><a href="#">Most Viewed Writers</a></li>
                  <li><a href="#">Answer</a></li>
                  <li>
                    <div className="ActionBar">
                      <button className="btn btn-primary primary_action">Follow Topic</button>
                    </div>
                  </li>

                </ul>
            </nav>
          </div>
        </div>

      </div>
    );
  }

}
