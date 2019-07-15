const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const comments = req.body.comments;
  const votes = Number(req.body.votes);
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    title,
    author,
    content,
    comments,
    votes,
    date
  });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.d'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.author = req.body.author;
      post.title = req.body.title;
      post.conent = req.body.content;
      post.comments = req.body.comments;
      post.votes = Number(req.body.votes);
      post.date = Date.parse(req.body.date);

      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;