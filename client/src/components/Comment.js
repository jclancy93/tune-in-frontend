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
        backgroundSize: "cover"
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
      <li className="video" data-id={this.props.data.id}>
        <div onClick={this.handleClick}
         className="video__preview" >
         <div ></div>
          <div style={videoStyle}></div>
        </div>
        <div className="video__info">
          <a href={this.props.data.url}><h2>{this.props.data.title}</h2></a>
            <span>
              <a href={this.props.data.spotifyInfo.US.url} className="user-link">
                {this.props.data.artistName}
              </a>
              <br/>
              <a>{this.props.data.name}</a>
            </span>
        </div>
        <div className="options">
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </li>

      );
  }
}        




export default Video;