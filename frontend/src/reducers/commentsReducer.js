import merge from "lodash";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS_FOR_SONG
} from "../actions/commentsAction";

export const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return normalize(action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, { [action.comment.id]: action.comment });
    case RECEIVE_COMMENTS_FOR_SONG:
      // debugger;
      return normalize(action.songComments);
    default:
      return oldState;
  }
};

const normalize = comments => {
  let obj = {};
  comments.forEach(comment => {
    obj[comment.id] = comment;
  });
  return obj;
};
