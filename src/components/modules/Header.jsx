import React, { Component } from 'react';


import Navigation from '../shared/Navigation.jsx';
import Feeds from '../shared/Feeds.jsx';

export default class Header extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Feeds />
      </div>
    );
  }
}
