import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class SearchBar extends Component {

  render() {
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group" style={{paddingRight:10}}>
          <input type="text" className="form-control" placeholder="Ask me something..." />
        </div>
        <button type="submit" className="btn btn-default">Ask question</button>
      </form>
    );
  }

}
