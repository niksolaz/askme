import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../../actions/answerCreator';
import MessageList from './MessageList.jsx';

class AnswersMessageList extends Component {

  render() {
    return ( 
      <div className="container">
          <div className="row">
            Answer 
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge"> 234 </span>
                 Should I abandon my Objective-c app and rewrite everything in Swift?
              </li>
              <li className="list-group-item">
                <span className="badge"> 234 </span>
                 Should I make IOS or Android apps (I know the basics of both Java and Objective C/Swift)? 
              </li>
              <li className="list-group-item">
                <span className="badge"> 234 </span>
                 Did Perfect.org anticipate that Swift would have been open sourced? 
              </li>
            </ul>
          </div>  
          <MessageList />     
      </div>
    );

  }
}

function mapStateToProps(state){
  return {
    facebookMessages: state.answersMessages 
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersMessageList);
