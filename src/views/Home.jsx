import React from 'react';

import Header from '../components/modules/Header.jsx';
import Feeds from '../components/shared/Feeds.jsx';
import TrendingNow from '../components/shared/TrendingNow.jsx';
import SetUpYourAccount from '../components/shared/SetUpYourAccount.jsx';
import FeedList from '../components/shared/FeedList.jsx';
import {Link, PropTypes} from 'react-router';


export default class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Header  />
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

Home.contextTypes = { history: PropTypes.history };
