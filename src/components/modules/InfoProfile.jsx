import React, { Component } from 'react';


import TopicProfile from '../shared/TopicProfile.jsx';
import EducationProfile from '../shared/EducationProfile.jsx';
import LocationProfile from '../shared/LocationProfile.jsx';
import EmploymentProfile from '../shared/EmploymentProfile.jsx';

export default class InfoProfile extends Component {
  render() {
    return (
      <div>
      		<div className="row">
	        	<div>
	        		<div className="col-md-2"></div>
	        		<div className="col-md-8">
		      			<h3>Nicola, add details about what you know.</h3>
		      		</div>
		      		<div className="col-md-2"></div>
		      		<div className="col-md-12"></div>
		      		<div className="col-md-2"></div>
		      		<div className="col-md-8">
			        	<TopicProfile />
			        	<EducationProfile />
			        </div>
			        <div className="col-md-2"></div>
			        <div className="col-md-12"></div>
			        <div className="col-md-2"></div>
			        <div className="col-md-8">
			        	<LocationProfile />
			        	<EmploymentProfile />
			        </div>
			        <div className="col-md-2"></div>
			        <div className="col-md-12"></div>
		        </div>
        	</div>
      </div>
    );
  }
}