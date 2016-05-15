import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import NewsFeed from './NewsFeed';
import Story from './Story';

export default class Feeds extends Component {
  
  render() {
    return (
      <div>
      	<NewsFeed />
      	<Story />
      </div>
    );
  }

}