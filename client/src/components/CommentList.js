import React, {Component} from 'react';
import Video from './Comment'

 class commentList extends Component {
  render() {
    if (this.props.data['0']) {
    var commentNodes = this.props.data['0'].map(function (data, index) {
      console.log(data)
      return (
        <Video data={data} key={index} id={index}>
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