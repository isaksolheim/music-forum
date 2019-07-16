import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      titleInput: '',
      contentInput: '',
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.contentHandler = this.contentHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    // check if user is logged in
    if (this.props.state.username) {
      var post = {
        "author": this.props.state.username,
        "title": this.state.titleInput,
        "content": this.state.contentInput,
        "comments": [],
        "votes": 0,
        "date": new Date() 
      }

      // add the post to the database
      axios.post('http://localhost:5000/posts/add', post)
        .then(res => console.log(res.data));
    } else {
      console.log('Not logged in!');
    }
  }

  titleHandler(e) {
    this.setState({ titleInput: e.target.value });
  }

  contentHandler(e) {
    this.setState({ contentInput: e.target.value });
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    return(
      <section>
        <h1>Posts</h1>
        <form onSubmit={this.submitHandler}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.titleHandler} />
          </label>
          <br />
          <label>
            Content
            <textarea type="text" onChange={this.contentHandler}></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default Posts;