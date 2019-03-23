const express = require('express');
const router = express.Router();

const {
  getAllComments,
  getCommentsForASong,
  createComment,
  updateComment,
  deleteComment,
} = require('../db/queries/commentsQueries');

router.get('/', getAllComments);
router.get('/:id', getCommentsForASong);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;
