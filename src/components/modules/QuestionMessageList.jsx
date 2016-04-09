import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../../actions/questionCreator';
import MessageList from './MessageList.jsx';

class QuestionMessageList extends Component {
  render() {
    return (
      <MessageList />
    );

  }
}

function mapStateToProps(state){
  return {
    questionMessages: state.questionMessages 
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionMessageList);
