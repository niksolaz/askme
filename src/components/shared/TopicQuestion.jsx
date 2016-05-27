import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TopicQuestion extends Component {

  render() {
    return (
      <div className="TopicQuestion" style={{paddingBottom:20}}>
        <div className="row">
          <div className="col-xs-2">

          </div>
          <div className="col-xs-10">
            <h1>What is Swift?</h1>
            <div className="User" style={{color:"#aaa", paddingBottom:10}}>
              Tikhon Jelvis, studied programming languages and did research on program synthesis
            </div>
            <div className="QuestionBody">
              Here's what I can say after reading the Swift Tour.
              Swift is a modern high-level programming language pretty similar to a natively compiled Java except with some modern design decisions and features as well as a few rough edges sanded off. It looks quite a bit lik
            </div>
          </div>
        </div>
      </div>
    );
  }

}
