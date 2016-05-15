import React, { Component } from 'react';
import {Link} from 'react-router';
import Relay from ('react-relay');
import classnames from 'classnames';

class Story extends Component {
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

export default Relay.createContainer(Story, {
  fragments: {
    story: () => Relay.QL`
      fragment on Story {
        author {
          name: 'Nik',
          profilePicture {
            uri: "https://…"
          }
        },
        text:"The first Relay blog post is up…"
      }
    `,
  },
});