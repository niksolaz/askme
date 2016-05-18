import React,{Component} from 'react';

import Header from '../components/modules/Header.jsx';
import InfoProfile from '../components/modules/InfoProfile.jsx';

import {Link, PropTypes} from 'react-router';

export default class Profile extends React.Component {
    
     render() {
        return(
            <div className="container">
                <Header  />
                <InfoProfile />  
            </div>
            );
    }
}

Profile.contextTypes = { history: PropTypes.history };