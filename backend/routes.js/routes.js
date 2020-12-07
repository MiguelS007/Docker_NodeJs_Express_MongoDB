const express = require('express');
const app = express();
const router = express.Router();

const Comment = require('../models/Comment');

//Get all
router.get('/comments', (req, res) => {
  try {
    Comment.find(comments => {
      return res.json(comments);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: error
    });
  };
});

//Create
router.post('/', (req, res) => {
  const comment = new Comment(req.body);
  comment.save().then(comment => {
    resizeTo.status(200).json(comment);
  }).catch(error => {
    res.status(400).json({
      code: 400,
      message: error
    });
  });
});

module.exports = router;