import React, {Component} from 'react';
import './Comment.css';

class Video extends Component {
  render() {
      var videoStyle = {
        width: "60px",
        height: "60px",
        color: "white",
        display: "inline-block",
        background: `url(${this.props.data.spotifyInfo.US.image}) center`,
        backgroundSize: "cover",
        marginLeft: "50px"
      };
      var userIconStyle = {
        borderRadius: "50%",
        height: "16px",
        width: "16px",
        display: "inline-block",
        background: `url(${this.props.data.user_portrait_small})`,
        backgroundSize: "cover"
      }
      return (
      <li className="video" data-id={this.props.id}>
        <div onClick={this.handleClick}
         className="video__preview" >
         <div className="list-number">{this.props.id + 1}.</div>
         <div className="play-button">
            <i className="fa fa-play" aria-hidden="true"></i>
         </div>
          <div style={videoStyle}></div>
        </div>
        <div className="video__info">
          <a href={this.props.data.url}><h2>{this.props.data.title}</h2></a>
            <span>
              <a>{this.props.data.name}</a>
              <br/>
              <a href={this.props.data.spotifyInfo.US.url} className="user-link">
                {this.props.data.artistName}
              </a>
            </span>
        </div>
        <div className="options">
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div className="duration">
          <span>2:39</span>
        </div>
      </li>

      );
  }
}        




export default Video;