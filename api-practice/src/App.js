import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  
  state = {posts: []}
  
  callMyApi = (url) => {
    axios.get(url)
      .then(resp => {
        console.log(resp)
        this.setState({
          posts: resp.data
        })
      })
  }
  
  render() {

    const {posts} = this.state
    

    return (
      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.callMyApi('https://jsonplaceholder.typicode.com/posts')}>API call for posts</button>
        {posts.map(post => {
            return <div className='card' >
              <div className="card-body">
                <h5 className="card-title text-primary">{post.title}</h5>
                <p className="card-text text-success">{post.body}</p>
                <p className="card-text text-danger">{post.userId}</p>
              </div>
            </div>
          })}
      </div>
    );
  }
}

export default App;
