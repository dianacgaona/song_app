import { merge } from 'lodash';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS_FOR_SONG
} from '../actions/commentsAction';

export const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENTS_FOR_SONG:
      let state = merge({}, oldState);
      let song_id = action.payload.id;
      let comments = action.payload.comments;
      state[song_id] = comments;
      return state;
    case RECEIVE_COMMENT:
      return merge({}, oldState, { [action.comment.id]: action.comment });
    default:
      return oldState;
  }
};
