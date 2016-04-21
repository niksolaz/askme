import React from 'react';

import Header from '../components/modules/Header.jsx';
import SettingButton from '../components/shared/SettingButton.jsx';
import {Link, PropTypes} from 'react-router';


export default class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Header  />
                <div className="row">
                 <div className="col-md-12">
                   <div className="jumbotron">
                     <h1>ASKME</h1>
                     <p>Ask a question and get a reply!</p>
                     <p><a className="btn btn-success btn-lg" href="https://github.com/niksolaz/askme" role="button">Learn more on GitHub</a></p>
                   </div>
                 </div>
                </div>
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };
