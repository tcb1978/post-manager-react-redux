import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React/Redux Post Manager</h1>
          </header>
          <PostForm />
          <br />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
