import React, { Component } from 'react';
import './App.css';
import axios from '../node_modules/axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/api/all_posts')
      .then(res => this.setState({  posts: res.data }));
  }

  convertObjectArraytoArray(objArray) {
    var array = Object.values(objArray);
    var array = Object.keys(objArray).map(i => objArray[i]);
    return array;
  }

  render() {
    this.state.posts = this.convertObjectArraytoArray(this.state.posts);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Posts List</h1>
        </header>
        <ul>
          {this.state.posts.map(post =>
            <li style={userItem}>
              <p>
                <i>{post.Post} </i>
                {post.Author} 
                <b> {post.Date}</b>
              </p>
            </li>
          )};         
        </ul>
      </div>
    );
  }
}

export default App;

const userItem = {
  'list-style-type': 'none'
};