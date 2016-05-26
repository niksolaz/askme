import React,{Component} from 'react';

import Header from '../components/modules/Header.jsx';
import InfoProfile from '../components/modules/InfoProfile.jsx';
import UserProfile from '../components/modules/UserProfile.jsx';

import {Link, PropTypes} from 'react-router';

export default class Profile extends React.Component {

     render() {
        return(
            <div className="container">
                <Header  />
                <UserProfile />
            </div>
            );
    }
}

Profile.contextTypes = { history: PropTypes.history };
