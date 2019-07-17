import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }

  getPost = () => {
    var id = this.props.match.params.id;
    for (var i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i]._id === id) {
        return(this.state.posts[i])
      }
    }
    console.log('Could not find post');
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    const post = this.getPost();
    if (post) {
      return(
        <section className="post-container">
          <div className="user-date">
            <h1 className="title">{post.title}</h1>
            <div className="votes"><i className="fa fa-heart"></i>{post.votes}</div>
            <div className="picture"><i class="fa fa-user fa-3x"></i></div>
            <p className="author">{post.author}</p>
            <p className="date">{post.date}</p>
          </div>
          <p>{post.content}</p>
        </section>
      );
    } else {
      return(
        <p>Loading...</p>
      );
    }
  }
}

export default Post;