import React, {Component} from 'react';
import Video from './Comment'

 class commentList extends Component {
  render() {
    if (this.props.data['0']) {
      console.log(this.props, 'here are the props')
    var commentNodes = this.props.data['0'].map(function (song, index) {
      console.log(song)
      return (
        <Video data={song} key={index}>
        </Video>
      );
    });
    }
    else {
      var commentNodes = <h1>no data</h1>
    }
    return (
      <ul className="video__list">
        {commentNodes}
      </ul>
    );
  }
}

export default commentList;