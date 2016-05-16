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
        	<div className="col-xs-6 col-lg-4">
        		<Feeds />
        		<TredingNow />
        	</div>
        	<div className="col-xs-6 col-lg-4">
        		<TopStoryForYou />
        	</div>
        	<div className="col-xs-6 col-lg-4">
        		<SetUpYourAccount />
        	</div>
        </div>
      </div>
    );
  }
}