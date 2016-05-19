import React, { Component } from 'react';

import Feeds from '../shared/Feeds.jsx';
import AnswersList from '../shared/AnswersList.jsx';

export default class UserProfile extends Component {
  render() {
    return (
    	<div>
      		<div className="row">
      			<div className="col-md-12"></div>
      			<div className="col-md-9">
	      			<div className="media">
					  <div className="media-left media-middle">
					    <a href="#">
					      <img className="media-object" src="./ic_72x72.png" alt="..."/>
					    </a>
					  </div>
					  <div className="media-body">
					    <h4 className="media-heading">First_Name Last_Name</h4>
						<a href='#'> Add Profile Bio </a>
					  </div>
					</div>
				</div>
				<div className="col-md-12"></div>
				<div className="col-md-3">
      				<Feeds />
      			</div>
      			<div className="col-md-6">
      				<AnswersList />
      			</div>
      		</div>
    	</div>
    );
  }
}