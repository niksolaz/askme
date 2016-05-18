import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TopicProfile extends Component {
  
  render() {
    return (
      <div>

      	<div className="col-lg-3">
      		<label>What topics do you know about?</label>
        	<div className="input-group">
            	<input type="text" className="form-control" placeholder="Add Topic"/>
            	<span className="input-group-btn">
              		<button className="btn btn-primary" type="button">Add</button>
            	</span>
          	</div>
        </div> 

      </div>
    );
  }

}