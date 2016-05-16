import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class SearchBar extends Component {
  
  render() {
    return (
      <div>
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..."/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>	
      </div>
    );
  }

}