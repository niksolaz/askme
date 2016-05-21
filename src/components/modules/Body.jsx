import React, { Component } from 'react';

import Feeds from '../shared/Feeds.jsx';
import TredingNow from '../shared/TredingNow.jsx';
import TopStoryForYou from '../shared/TopStoryForYou.jsx';
import SetUpYourAccount from '../shared/SetUpYourAccount.jsx';

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="row">
        	<div className="col-xs-2">
        		<Feeds />
        		<TredingNow />
        	</div>
        	<div className="col-xs-7">
        		<TopStoryForYou />
        	</div>
        	<div className="col-xs-3">
        		<SetUpYourAccount />
        	</div>
        </div>
      </div>
    );
  }
}