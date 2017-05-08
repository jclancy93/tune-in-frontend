import React, {Component} from 'react';
import {connectProfile} from '../auth';
import './EditProfile.css';
import CommentList from './CommentList'

class EditProfile extends Component {
  constructor() {
    super()
    this.state = {  data: [] };
    this.loadData();
  }
  loadData () {
    fetch("http://localhost:8000/api/songs")
    .then(res => res.json())
    .then(res => this.setState({data: [res]}))
    .then(data => console.log(this.state))
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    })
  }
  componentDidMount() {
    this.loadData();
    setInterval(this.loadData(), 160);
  }
render() {
    
    return (
    <div className="main">
      <header>
      </header>
      <main>
        <h2 className="section-title">
          {/*
            // Check for data, if none display loading... 
            // if data display most liked
          */}
          { this.state.data.length>0 ?  'Your Songs'  : 'Loading....'}
        </h2>
        {/*
          // Check for data then render component
          // sort data to show most liked videos first
        */}
        {this.state.data.length > 0 &&
        <CommentList 
        data={this.state.data}
        />
        }
      </main>
      </div>
    );
  }
}

export default connectProfile(EditProfile);
