import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      titleInput: '',
      contentInput: '',
      addPost: false,
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

  handleToggle = () => {
    if (this.state.addPost) {
      this.setState({ addPost: false });
    } else {
      this.setState({ addPost: true })
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    const createPost = (
      <div className="new-post">
        <div className="content">
          <h1>Create post</h1>
          <div className="close-button" onClick={this.handleToggle}>
            <i className="fa fa-window-close"></i>
          </div>
          <form onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col-25">
                <label>Title</label>
              </div>
              <div className="col-75">
                <input type="text" name="title" onChange={this.titleHandler} placeholder="Title.." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Content</label>
              </div>
              <div className="col-75">
                <textarea type="text" onChange={this.contentHandler} placeholder="Content.."></textarea>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
    return(
      <section className="posts-container">
        {this.state.addPost ? createPost : <div onClick={this.handleToggle} className="create-post-button">Create Post</div>}
        <div className="posts">
          {this.state.posts.map(post => {
            return(
              <div className="post" key={post._id}>
                <div className="box votes">{post.votes}</div>
                <div className="box picture"><i class="fa fa-user fa-3x"></i></div>
                <div className="box user">{post.author}</div>
                <Link className="box title" to={`/posts/${post._id}`}>{post.title}</Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Posts;