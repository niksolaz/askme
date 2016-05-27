import React,{Component} from 'react';

import Header from '../components/modules/Header.jsx';
import HeaderTopic from '../components/modules/HeaderTopic.jsx';
import BodyTopic from '../components/modules/BodyTopic.jsx';
import TopicQuestions from '../components/shared/TopicQuestions.jsx';
import FeedList from '../components/shared/FeedList.jsx';
import TopicAbout from '../components/shared/TopicAbout.jsx';
import MostViewedWriters from '../components/shared/MostViewedWriters.jsx';
import TopicAnswers from '../components/shared/TopicAnswers.jsx';
import RelatedTopics from '../components/shared/RelatedTopics.jsx';
import HeaderTopic from '../components/shared/HeaderTopic.jsx'

import {Link, PropTypes} from 'react-router';

export default class Topic extends React.Component {

     createPageBody(){
       return (
         <div className="row">
           <div className="col-xs-8">
             <h4>Topic Questions</h4>
             <hr />
             <TopicQuestions />

             <h4>Feeds</h4>
             <hr />
             <FeedList topic="Swift" />
           </div>
           <div className="col-xs-4">
             <TopicAbout />
             <MostViewedWriters />
             <TopicAnswers />
             <RelatedTopics />
           </div>
         </div>
       );
     }
     
     render() {
        var pageBody = this.createPageBody();

        return(
            <div className="container">
                <Header  />

                <HeaderTopic  />
                {pageBody}
            </div>
            );
    }
}

Topic.contextTypes = { history: PropTypes.history };
