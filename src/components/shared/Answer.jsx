import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import {upvoteAnswer} from '../../actions/answerCreator.js';


class Answer extends Component {
	// Upvote an answer
	upvoteAnswer(){
		var answerId = this.props.id; // It comes from redux
		this.props.upvote(answerId); // It comes from redux;

	}
	render(){

		return (
			<div className="AnswerItem">
				<div className="row">
					<div className="col-xs-12">
						<span className="prefix">Question asked</span>
	                    <span className="topic">Javascript</span>
	                    <span className="timestamp">Yesterday</span>
          </div>
		    </div>

        <div className="row">
        	<div className="col-xs-12">
        		<div className="question">
                  <h4>Why is Node.JS so hated, what should I learn then?</h4>
                </div>
        	</div>
        </div>

    		<div className="row">
    			<div className="question-content">
    				<div className="col-xs-12">
    					Strange that people hate so much NodeJS
    				</div>
    			</div>
    		</div>
        <div className="ActionBar">
        	<div className="row">
        		<div className="col-xs-2">
        			<button className="btn btn-primary primary_action" type="button" onClick={this.upvoteAnswer}>
								<span>Upvote</span>
							</button>
        		</div>
        		<div className="col-xs-2">
        			<a className="second_action" href="/downvote">
								<span>Downvote</span>
							</a>
        		</div>
        		<div className="col-xs-2">
        			<a className="second_action" href="/comment">
								<span>
								Comments
								</span>
							</a>
        		</div>
        		<div className="col-xs-1 col-xs-offset-3">
							<div className="action_item">
								<div className="ShareSectionIcons">
									<a className="FacebookNetworkShare">
										<span className="icon icon_facebook"></span>
									</a>
									<a className="TwitterNetworkShare">
										<span className="icon icon_twitter"></span>
									</a>
									<a className="TwitterNetworkShare">
										<span className="icon icon_twitter"></span>
									</a>
									<a className="AnswerQuickShare">

									</a>
								</div>
							</div>
						</div>
        	</div>
        </div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
		id: state.answer.id
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    upvote: (id) => {
      upvoteAnswer(id);
    }
  }
}

Answer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer)

export default Answer
