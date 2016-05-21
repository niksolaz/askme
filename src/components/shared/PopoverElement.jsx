import React, { Component } from 'react';
import {Link} from 'react-router';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import classnames from 'classnames';


export default class PopoverElement extends Component {
  createPopoverList(){
    var list = this.props.popoverList;
    if (!list) return (<ul></ul>);

    var temp = [];
    for (var index in list) {
      var el = list[index];

      temp.push(<li><Link to={el.link}>{el.title}</Link></li>);
    }
    var htmlList = (
      <ul>
        {temp}
      </ul>
    );

    return htmlList;
  }

  createPopOver(){
    var list = this.createPopoverList();
    var popoverTitle = this.props.popoverTitle || "Title";
    return (
      <Popover placement="top" positionLeft={200} positionTop={50} title={popoverTitle}>
        {list}
      </Popover>
    );

  }

  render() {
    var element = this.props.element;
    var popOver = this.createPopOver();
    
    return (
      <OverlayTrigger 
        trigger="click" 
        placement="bottom" 
         overlay={popOver}>
        {element}
      </OverlayTrigger>
    );
  }

}