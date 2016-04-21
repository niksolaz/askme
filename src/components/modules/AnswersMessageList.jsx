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
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge"> 234 </span>
                 example answer 
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
