import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../../actions/questionCreator';
import MessageList from './MessageList.jsx';

class QuestionMessageList extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div> 
          <MessageList />       
      </div>
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
