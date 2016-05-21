import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TredingNow extends Component {
  
  render() {
    return (
      <div className="feeds">
        <div className="row">
          <div className="col-xs-8">
            <span className="trending-list-icon"></span><span style={{fontWeight:'bold'}}>Trending now</span>
          </div>
          <div className="col-xs-3">
            <span style={{fontWeight:'bold'}}>Edit</span>
          </div>
        </div>
        <div className="row">
          <hr style={{marginTop:0, marginBottom:5}}/>
        </div>
        <div className="row">
          <ul className="feed-list">
            <li><Link to="/pinned/mobile-applications">Vivi Al Debuts</Link></li>
            <li><Link to="/pinned/technology-startups">Trump Goes After Amazon</Link></li>
            <li><Link to="/pinned/javascript">Paul Ryan / Trump conflict</Link></li>
            <li><Link to="/pinned/the-internet">Game of Thrones season 6 Episode 4</Link></li>
            <li><Link to="/pinned/science">Antigravity</Link></li>
          </ul>   
        </div>          
      </div>
    );
  }

}

