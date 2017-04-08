import React, {Component} from 'react';

class Video extends Component {
  render() {
      var videoStyle = {
        width: "48px",
        height: "48px",
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
        {/* 
          //Overlay markup
        */}
          <div style={videoStyle}></div>
          <i className="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
        </div>
        {/* 
          //Video info markup
        */}
        <div className="video__info">
          <a href={this.props.data.url}><h2>{this.props.data.title}</h2></a>
          {/* 
            //Video info markup
          */}
          <div className="user-info">
            <span style={userIconStyle}></span>
            <span>
              <a href={this.props.data.spotifyInfo.US.url} className="user-link">
                {this.props.data.artistName}
              </a>
               | {this.props.data.stats_number_of_plays} plays
            </span>
          </div>
        </div>
      </li>
      );
  }
}

export default Video;