import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class TopStoryForYou extends Component {
  
  render() {
    return (
      <div className="FeedItemList">
        <div className="row">
          <div className="col-xs-12">
            <div className="FeedItem FeedItem-Answer">
              <div className="row">
                <div className="col-xs-12">
                  <div className="Header">
                    <span className="Prefix">Answer written</span>
                    <span className="Topic">Javascript</span>
                    <span className="Timestamp">Yesterday</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="Question">
                  <h4>Why is Node.JS so hated, what should I learn then?</h4>
                </div>

              </div>
              <div className="row">
                  <div className="Answer">
                    <div className="Header">
                      <div className="col-xs-1">
                        <div className="UserPicture">
                          <img src="http://placehold.it/50x50"  className="img-circle"/>
                        </div>
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
                    <div className="Content">
                      <div className="Text">
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
              <div className="row">
                <div className="col-xs-12">
                  <div className="FeedItemFooter">
                    Written Apr 30 = View Upvotes
                  </div>
                </div>
              </div>
                
                
              <div className="ActionBar">
                  <span className="DpvoteButton">
                    <button type="button" value="Upvote | 24" />
                  </span>
                  <span className="DownvoteButton">
                     <button type="button" value="Downvote" />
                  </span>
                  <span className="Comments">
                     <button type="button" value="Comments | 3" />
                  </span>
              </div>
          </div>
          </div>
        </div> 
             
      </div>
    );
  }

}