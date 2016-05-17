import React,{Component} from 'react';

import Header from '../components/modules/Header.jsx';
import HeaderTopic from '../components/modules/HeaderTopic.jsx';
import BodyTopic from '../components/modules/BodyTopic.jsx';

import {Link, PropTypes} from 'react-router';

export default class Topic extends React.Component {
    
     render() {
        return(
            <div className="container">
                <Header  />
                <HeaderTopic  />  
                <BodyTopic />   
            </div>
            );
    }
}

Topic.contextTypes = { history: PropTypes.history };