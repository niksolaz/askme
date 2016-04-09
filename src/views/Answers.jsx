import React from 'react';

import Header from '../components/modules/Header.jsx';
import AnswersMessageList from '../components/modules/AnswersMessageList.jsx';

import {Link, PropTypes} from 'react-router';
;

export default class Answers extends React.Component {
    

    render() {
       
        return(
            
            <div className="container">
                <Header  />
                <h3>Answers</h3>
                <br/>
                <AnswersMessageList />
            </div>
            );
    }
}

Answers.contextTypes = { history: PropTypes.history };
