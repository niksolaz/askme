import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';


export default class FeedItem extends Component {

	render(){
		return (
			<div className="feedItem">
				<div className="row">
					<div className="col-xs-12">
						<span className="prefix">Answer written</span>
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
		        <div className="answer">
		        	<div className="row">
	        			<div className="answer-header">
	        				<div className="col-xs-1">
	        					<img src="http://placehold.it/50x50"  className="img-circle"/>
	        				</div>
	        				<div className="col-xs-11">
	        					<div className="UserInfo">
		                          <div className="Username">
		                            Glenn Anderson, May never pass a Turing test.
		                          </div>
		                          <div className="UserViews">
		                            6.3k Views • Upvoted by Garry Taylor, Been programming since 8 bit computers and Sergiy Kyrylkov, Full Stack JavaScript Developer
		                          </div>
		                          <div className="UserAdditionalInfo">
		                            Glenn has 120+ answers in Computer Programming
		                          </div>
		                        </div>
	        				</div>
	        			</div>
	        		</div>
	        		<div className="row">
	        			<div className="answer-content">
	        				<div className="col-xs-12">
	        					Some people dislike Node.js because it is JavaScript. There are some programmers who see JavaScript's roots as a scripting language designed to add a 
		                          little interactivity to a web site as what it is today. Others look at things like dynamic typing, prototypal inheritance, and general quirkiness and just can't 
		                          understand how it can be tolerated. Some people are sick of the hype, and wonder why similar solutions 
		                          in other languages, 
		                          for example Tornado in Python are not given as much attention.
		                          Node.js was pretty much an instant hit when it was introduced. Despite its quirks JavaScript is an immensely popular language, with a horde of developers already familiar with it. 
		                        It has a very active developer community.
		                          So, Node.js is hated by some developers because it is JavaScript and seen as an inferior choice to other solutions.
	        				</div>
	        			</div>
	        		</div>
		        </div>
		        <div className="footer">
		        	<div className="row">
		        		<div className="footer-text">
		        			Written Apr 30 = View Upvotes
		        		</div>
		        	</div>
		        </div>
		        <div className="action-bar">
		        	<div className="row">
		        		<div className="col-xs-2">
		        			<button className="btn btn-primary" type="button">Upvote</button>
		        		</div>
		        		<div className="col-xs-2">
		        			<button className="btn btn-primary" type="button">Downvote</button>
		        		</div>
		        		<div className="col-xs-2">
		        			<button className="btn btn-primary" type="button">Comments</button>
		        		</div>
		        		<div className="col-xs-6"></div>
		        	</div>
		        </div>
			</div>
		);
	}
}

