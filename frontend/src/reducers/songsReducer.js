import merge from "lodash";
import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  RECEIVE_USER_POSTED_SONGS
  // RECEIVE_CURRENT_USER_POSTED_SONGS
} from "../actions/songsAction";

export const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SONGS:
      return normalize(action.songs);
    case RECEIVE_SONG:
      return merge({}, oldState, { [action.song.id]: action.song });
    case RECEIVE_USER_POSTED_SONGS:
      // debugger;
      return normalize(action.userPostedSongs);
    // case RECEIVE_CURRENT_USER_POSTED_SONGS:
    //   // debugger;
    //   return normalize(action.currentUserPostedSongs);
    default:
      return oldState;
  }
};

const normalize = songs => {
  let obj = {};
  songs.forEach(song => {
    obj[song.id] = song;
  });
  return obj;
};
