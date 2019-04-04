import * as commentsApi from "../utils/commentsUtil";

export let RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export let RECEIVE_COMMENT = "RECEIVE_COMMENT";
export let RECEIVE_COMMENTS_FOR_SONG = "RECEIVE_COMMENTS_FOR_SONG";

export const receivedComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

export const receivedComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment: comment
  };
};

export const receivedCommentsForSong = (id, comments) => {
  return {
    type: RECEIVE_COMMENTS_FOR_SONG,
    payload: { id, comments }
  };
};

export const createComment = comment => dispatch => {
  return commentsApi
    .createComment(comment)
    .then(res => {
      debugger;
      return dispatch(receivedComment(res.data.comment));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAllComments = () => dispatch => {
  return commentsApi
    .getAllComments()
    .then(res => {
      return dispatch(receivedComments(res.data.comments));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAllCommentsForSong = id => dispatch => {
  return commentsApi
    .getAllCommentsForSong(id)
    .then(res => {
      return dispatch(receivedCommentsForSong(id, res.data.comments));
    })
    .catch(err => {
      console.log(err);
    });
};
