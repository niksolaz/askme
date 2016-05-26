import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import SearchBar from './SearchBar.jsx';
import PopoverElement from './PopoverElement.jsx';

var notificationButton = (
  <span className="glyphicon glyphicon-bell" aria-hidden="true">
    Notifications
  </span>
);

var userButton = (
  <span>
    <img src="http://placehold.it/18x18" className="profile-image img-circle" /> Nicola
  </span>
);
export default class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to={'/'} className="navbar-brand">
                <span className="logoMain">Ask Me</span>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="my-navbar">
                <SearchBar />
                <ul className="nav navbar-nav navbar-right">

                    <li className="navbar-link active"><Link to={'/'}>
                      <span className="glyphicon glyphicon-th-list" aria-hidden="true"> Read </span>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/Answers'}>
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"> Answer </span>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/#'}>
                      <PopoverElement popoverTitle="See all the notifications" popoverList={[{"link":"/notification/1", "title":"This is the first notification"}]} element={notificationButton}></PopoverElement>
                    </Link></li>

                    <li className="navbar-link"><Link to={'/#'}>
                      <PopoverElement popoverTitle="What do you want to do?" popoverList={[{"link":"/profile", "title":"Profile"}, {"link":"/blog", "title":"Blog"}, {"link":"/logout", "title":"Log out"}]} element={userButton}></PopoverElement>
                    </Link></li>

                </ul>
            </div>
          </div>
      </nav>
    );
  }

}
