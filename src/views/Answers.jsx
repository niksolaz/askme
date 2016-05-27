import React from 'react';

import Header from '../components/modules/Header.jsx';
import Feeds from '../components/shared/Feeds.jsx';
import TrendingNow from '../components/shared/TrendingNow.jsx';
import AnswersList from '../components/shared/AnswersList.jsx';
import WritingNow from '../components/shared/WritingNow.jsx';

import {Link, PropTypes} from 'react-router';

export default class Answers extends React.Component {


    render() {

        return(

            <div className="container">
                <Header  />
                <div className="row">
                  <div className="col-xs-2">
                    <Feeds />
                    <TrendingNow />
                  </div>
                  <div className="col-xs-7">
                    <AnswersList />
                  </div>
                  <div className="col-xs-3">
                    <WritingNow />
                  </div>
                </div>

            </div>
            );
    }
}

Answers.contextTypes = { history: PropTypes.history };
