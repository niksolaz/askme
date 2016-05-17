require('./styles/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import {Home, Question, Answers, Message, Topic} from './views';

import configureStore from './store';
const initialState = {};
const store = configureStore(initialState);

store.subscribe(() => console.log("State changed",store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Route path="/" component={Home}/>
            <Route path="/question" component={Question}/>
            <Route path="/answers" component={Answers}/>
            <Route path="/topic" component={Topic}/>
            <Route path="/:social/:messageID" component={Message} />
        </Router>
    </Provider>
    , document.getElementById('app'));
