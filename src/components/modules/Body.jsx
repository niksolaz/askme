import React, { Component } from 'react';

import Feeds from '../shared/Feeds.jsx';
import TrendingNow from '../shared/TrendingNow.jsx';
import TopStoryForYou from '../shared/TopStoryForYou.jsx';
import SetUpYourAccount from '../shared/SetUpYourAccount.jsx';
import FeedList from '../shared/FeedList.jsx';

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="row">
        	<div className="col-xs-2">
        		<Feeds />
        		<TrendingNow />
        	</div>
        	<div className="col-xs-7">
        		<FeedList />
        	</div>
        	<div className="col-xs-3">
        		<SetUpYourAccount />
        	</div>
        </div>
      </div>
    );
  }
}
