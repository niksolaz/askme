import React from 'react';

import Header from '../components/modules/Header.jsx';
import Body from '../components/modules/Body.jsx';
import SettingButton from '../components/shared/SettingButton.jsx';
import {Link, PropTypes} from 'react-router';


export default class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Header  />
                <Body />
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };
