import React,{Component} from 'react';

import Header from '../components/modules/Header.jsx';
import QuestionMessageList from '../components/modules/QuestionMessageList.jsx';

import {Link, PropTypes} from 'react-router';



export default class Question extends React.Component {
    
     render() {
        return(
            <div className="container">
                <Header  />
                <h3>Question</h3>
                <br/>
                <QuestionMessageList />      
            </div>
            );
    }
}

Question.contextTypes = { history: PropTypes.history };
