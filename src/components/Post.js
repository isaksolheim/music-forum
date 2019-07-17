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
        <section>
          <h1>{post.title}</h1>
          <p>{post.author}</p>
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