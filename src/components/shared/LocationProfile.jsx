import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class LocationProfile extends Component {
  
  render() {
    return (
      <div>

      	<div className="col-lg-6">
      		<label>Where do you currently live?</label>
        	<div className="input-group">
            	<input type="text" className="form-control" placeholder="Add Locations"/>
            	<span className="input-group-btn">
              		<button className="btn btn-primary" type="button">Add</button>
            	</span>
          	</div>
        </div> 

      </div>
    );
  }

}