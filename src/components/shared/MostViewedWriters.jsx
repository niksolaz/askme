import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class MostViewedWriters extends Component {

  render() {
    return (
      <div className="MostViewedWriters">
        <div className="row">
          <div className="col-xs-12">
            <h4>Most Viewed Writers</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 Users">
              <ul className="list-group">
                <li className="list-group-item User">
                  <div className="row">
                    <div className="col-xs-2 UserThumbnail">
                      <img className="img-circle" src="http://placehold.it/40x40" alt="Thumbnail"/>
                    </div>
                    <div className="col-xs-10 UserInfo">
                      <h6><a href="#">Glyn Williams</a>, has written many lines of Swift.</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item User">
                  <div className="row">
                    <div className="col-xs-2 UserThumbnail">
                      <img className="img-circle" src="http://placehold.it/40x40" alt="Thumbnail"/>
                    </div>
                    <div className="col-xs-10 UserInfo">
                      <h6><a href="#">Reinder de Vries</a>, Swift programming instructor.</h6>
                    </div>
                  </div>
                </li>
                <li className="list-group-item User">
                  <div className="row">
                    <div className="col-xs-2 UserThumbnail">
                      <img className="img-circle" src="http://placehold.it/40x40" alt="Thumbnail"/>
                    </div>
                    <div className="col-xs-10 UserInfo">
                      <h6><a href="#">Garry Taylor</a></h6>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }

}
