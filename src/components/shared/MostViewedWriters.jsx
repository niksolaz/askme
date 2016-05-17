import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class MostViewedWriters extends Component {
  
  render() {
    return (
      <div>
        <div>
          Most Viewed Writers
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="..." alt="..."/>
                  </a>
                </div>
                <div className="media-body">
                  <h6 className="media-heading"><a href="#">Glyn Williams</a>, has written many lines of Swift.</h6>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="..." alt="..."/>
                  </a>
                </div>
                <div className="media-body">
                  <h6 className="media-heading"><a href="#">Garry Taylor</a></h6>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="..." alt="..."/>
                  </a>
                </div>
                <div className="media-body">
                  <h6 className="media-heading"><a href="#">Reinder de Vries</a>, Swift programming instructor</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>    	
      </div>
    );
  }

}