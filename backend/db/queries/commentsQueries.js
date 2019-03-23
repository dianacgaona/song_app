const { db } = require('../index.js');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(comments => {
      res.status(200).json({
        status: 'success',
        comments: comments,
        message: 'Comments received',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getCommentsForASong = (req, res, next) => {
  let songId = parseInt(req.body.id);
  db.any(
    'SELECT song_id, comments.id AS comment_id, comment_body AS comments, user_id AS commenter_id, username AS commenter FROM comments JOIN users ON comments.user_id = users.id WHERE song_id =$1 GROUP BY song_id, comment_id, comments, commenter_id, commenter',
    [songId]
  )
    .then(comments => {
      res.status(200).json({
        status: 'success',
        comments: comments,
        message: 'Comments for specific song received',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createComment = (req, res, next) => {
  let user = parseInt(req.body.user_id);
  let song = parseInt(req.body.song_id);
  db.none(
    'INSERT INTO comments (comment_body, user_id, song_id) VALUES (${comment_body}, ${user_id}, ${song_id})',
    {
      comment_body: req.body.comment_body,
      user_id: user,
      song_id: song,
    }
  )
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Comment created!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updateComment = (req, res, next) => {
  let user = parseInt(req.body.user_id);
  let song = parseInt(req.body.song_id);
  db.none(
    'UPDATE comments SET comment_body=${comment_body}, user_id=${user_id}, song_id=${song_id} WHERE id=${id}',
    {
      comment_body: req.body.comment_body,
      user_id: user,
      song_id: song,
      id: parseInt(req.params.id),
    }
  )
    .then(() => {
      res.status(200).json({
        message: 'Comment updated!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id=$1', commentId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        result: result,
        message: 'Comment deleted',
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllComments,
  getCommentsForASong,
  createComment,
  updateComment,
  deleteComment,
};
