import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({tweets: this.props.newTweets})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.newTweets.length > 0)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTweets.length > 0) {
      const allTweets = nextProps.newTweets.concat(this.state.tweets)
      this.setState({tweets: allTweets})
    }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
