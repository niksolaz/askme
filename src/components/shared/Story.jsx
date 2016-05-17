import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class Story extends Component {
  
  render() {
    return (
      <div>
        <div className="panel panel-default"> 
          <ul className="list-group">
            <li className="list-group-item">
              <div className="panel-heading">What is Swift?</div>
                <div className="panel-body">
                  <p>
                    David Stewart
                    David Stewart, Teacher from Australia.
                    277.9k Views • Most Viewed Writer in Philosophy of Everyday Life with 270+ answers
                    Leaving the rat race. I am getting really sick of people who have developed a condescending attitude to anyone who works 9-5. Ha! look at those drones going to their office every day like sheep who... (more)
                  </p>
                </div>
            </li>
            <li className="list-group-item">
              <div className="panel-heading">What is your review of Apple Swift (programming language)?</div>
                <div className="panel-body">
                  <p>
                    David Stewart
                    David Stewart, Teacher from Australia.
                    277.9k Views • Most Viewed Writer in Philosophy of Everyday Life with 270+ answers
                    Leaving the rat race. I am getting really sick of people who have developed a condescending attitude to anyone who works 9-5. Ha! look at those drones going to their office every day like sheep who... (more)
                  </p>
                </div>
            </li>
            <li className="list-group-item">
              <div className="panel-heading">Will Swift replace Objective-C?</div>
                <div className="panel-body">
                  <p>
                    David Stewart
                    David Stewart, Teacher from Australia.
                    277.9k Views • Most Viewed Writer in Philosophy of Everyday Life with 270+ answers
                    Leaving the rat race. I am getting really sick of people who have developed a condescending attitude to anyone who works 9-5. Ha! look at those drones going to their office every day like sheep who... (more)
                  </p>
                </div>
            </li>
          </ul>
        </div>     
      </div>
    );
  }

}