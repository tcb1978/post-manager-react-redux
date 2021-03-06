import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  onSubmit = (e) => {
     e.preventDefault();
     const post = {
       title: this.state.title,
       body: this.state.body
     }
     this.props.createPost(post)
  };

  render() {
    return (
      <Fragment>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
            <div>
              <label>Title: </label><br />
              <input 
                type="text" 
                name="title" 
                onChange={this.onChange} 
                value={this.state.title}
              />
            </div>
            <br />
            <div>
              <label>Body: </label><br />
              <textarea 
                name="body" 
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);