import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import FeedItem from './FeedItem.jsx';

export default class FeedList extends Component {

	render(){
		var el = (<FeedItem />);
		console.log(el);
		return (
			<div>
				<FeedItem />
			</div>
		);
	}

}