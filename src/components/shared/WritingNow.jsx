import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class WritingNow extends Component {

  render() {
    return (
      <div className="writingNow">
        <div className="row">
          <div className="col-xs-12">
            <h4>
              Writing Now
            </h4>
            <hr />
          </div>
        </div>
        <div className="questions">
          <div className="row user">
            <div className="col-xs-2">
              <img src="http://placehold.it/30x30" className="img-circle" />
            </div>
            <div className="col-xs-10">
              <div className="who_is_writing">
                User 1 is writing about Javascript
              </div>
              <div className="view_answer">
                <a href="#">View Answer</a>
              </div>
            </div>
          </div>
          <div className="row user">
            <div className="col-xs-2">
              <img src="http://placehold.it/30x30" className="img-circle" />
            </div>
            <div className="col-xs-10">
              <div className="who_is_writing">
                User 1 is writing about Javascript
              </div>
              <div className="view_answer">
                <a href="#">View Answer</a>
              </div>
            </div>
          </div>
          <div className="row user">
            <div className="col-xs-2">
              <img src="http://placehold.it/30x30" className="img-circle" />
            </div>
            <div className="col-xs-10">
              <div className="who_is_writing">
                User 1 is writing about Javascript
              </div>
              <div className="view_answer">
                <a href="#">View Answer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
