import React, { Component } from 'react';
import {Link} from 'react-router';
import Relay from ('react-relay');
import classnames from 'classnames';

class NewsFeed extends Component {
  render() {
    var stories = this.props.viewer.stories; // `viewer` is the active user
    return (
      <View>
        {stories.map(story => <Story story={story} />)}
        <Button onClick={() => this.loadMore()}>Load More</Button>
      </View>
    );
  }

  loadMore() {
    // read current params
    var count = this.props.relay.variables.count;
    // update params
    this.props.relay.setVariables({
      count: count + 5,
    });
  }
}

export default Relay.createContainer(NewsFeed, {
  initialVariables: {
    count: 3                                /* default to 3 stories */
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        stories(first: $count) {            /* fetch viewer's stories */
          edges {                           /* traverse the graph */
            node {
              ${Story.getFragment('story')} /* compose child fragment */
            }
          }
        }
      }
    `,
  },
});

