import React, {Component} from 'react';

class CommentBox extends Component {
  loadCommentsFromServer () {
    //fecth api (returns promise)
      fetch("http://localhost:8000/api/songs", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => this.setState(data))
    .then(data => console.log(this.state))
    .catch(e => console.log(e))
  }
  componentDidMount () {
    this.loadCommentsFromServer();
    //Set polling interval
    setInterval(this.loadCommentsFromServer, 160000);
  }
  render() {

    return (
      <div className="commentBox">
        <h3>Songs</h3>
        <CommentList data={this.state.data} />
      </div>
    );
  }
};

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (notification, index) {
      console.log(notification)
      return (
        <Comment key={index} data={notification} className="comment">
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


export default CommentBox;
