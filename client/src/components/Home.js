import React, {Component} from 'react';
import {connectProfile} from '../auth';
import './Home.css';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };
  loadCommentsFromServer () {
    //fecth api (returns promise)
      fetch("http://localhost:8000/api/songs", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
  }
  componentDidMount () {
    this.loadCommentsFromServer();
    //Set polling interval
    setInterval(this.loadCommentsFromServer, 160000);
  }
  render() {

    return (
      <div className="Home">
        <div className="Home-intro">
          <h2>Welcome to TuneIn</h2>
        </div>
      </div>
    );
  }
}

export default connectProfile(Home);
