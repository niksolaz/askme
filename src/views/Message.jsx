import React, {Component} from 'react';
import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Message extends Component {
	
	render() {
		return(
			<div>
				<Header />
				Message
			</div>
		);
	}
}
