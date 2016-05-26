import React, { Component } from 'react';

import Feeds from '../shared/Feeds.jsx';
import AnswersList from '../shared/AnswersList.jsx';

export default class UserProfile extends Component {
  render() {
    return (
    	<div className="Profile">
      	<div className="row">

      	</div>
        <div className="row">
          <div className="col-xs-9">
            <div className="row">
              <div className="col-xs-2">
                <div className="thumbnail">
                  <img className="img-circle" src="http://placehold.it/150x150" alt="My photo"/>
                </div>
              </div>
              <div className="col-xs-10">
                <div className="UserName">
                  <span className="FirstName">Nicola </span>
                  <span className="LastName">Solazzo</span>
                </div>
                <div className="Bio">
                  <a href="#">Add profile bio</a>
                </div>
                <div className="Description">
                  <a href="#">Add user description</a>
                </div>
                <div className="Followers ActionBar">
                  <button className="btn btn-primary  primary_action" type="button" value="Followers">Followers</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <h4>Feeds</h4>
                <hr />
                <ul>
                  <li>Answers</li>
                  <li>Questions</li>
                  <li>Posts</li>
                  <li>All Activity</li>
                </ul>
                <ul>
                  <li>Followers</li>
                  <li>Following</li>
                  <li>Edits</li>
                </ul>
              </div>
              <div className="col-xs-9">
                <h4>Answers</h4>
                <hr />
                <span>You haven't written any answer yet</span>
                <div>Answer your first question</div>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="row">
              <div className="col-xs-12">
                <h4>Answers View</h4>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4>About Nicola</h4>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4>Knows about</h4>
                <hr />
              </div>
            </div>
          </div>
        </div>
    	</div>
    );
  }
}
