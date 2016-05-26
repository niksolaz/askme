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
                <ul className="list-unstyled">
                  <li><a href="#">Answers</a></li>
                  <li><a href="#">Questions</a></li>
                  <li><a href="#">Posts</a></li>
                  <li><a href="#">All Activity</a></li>
                </ul>
                <ul className="list-unstyled">
                  <li><a href="#">Followers</a></li>
                  <li><a href="#">Following</a></li>
                  <li><a href="#">Edits</a></li>
                </ul>
              </div>
              <div className="col-xs-9">
                <h4>Answers</h4>
                <hr />
                <div className="answers">
                  <div className="no-answers">
                    <div className="no-answers-text">You haven't written any answer yet</div>
                    <div className="no-answers-question">
                      <a href="/answers">Answer your first question</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="row">
              <div className="col-xs-12">
                <h4>Answers View</h4>
                <hr />
                <div className="box">
                  <div className="emptyBox">
                    <div className="icon">
                      <div className="plus-icon">
                          
                      </div>
                    </div>
                    <div className="message">

                    </div>
                  </div>
                </div>
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
