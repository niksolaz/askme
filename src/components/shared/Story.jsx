import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

export default class Story extends Component {
  render() {
    var story = this.props.story;
    return (
      <View>
        <Image uri={story.author.profilePicture.uri} />
        <Text>{story.author.name}</Text>
        <Text>{story.text}</Text>
      </View>
    );
  }
}