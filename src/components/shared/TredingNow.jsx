import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TredingNow extends Component {
  
  render() {
    return (
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">Treding Now</div>
          <div class="panel-body">
            <ul className="list-group">
              <li className="list-group-item">Vivi Al Debuts</li>
              <li className="list-group-item">Trump Goes After Amazon</li>
              <li className="list-group-item">Paul Ryan / Trump conflict</li>
              <li className="list-group-item">Game of Thrones season 6 Episode 4</li>
              <li className="list-group-item">Antigravity</li>
            </ul>
          </div>
        </div>       
      </div>
    );
  }

}

