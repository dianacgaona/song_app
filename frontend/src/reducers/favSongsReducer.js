import {
  RECEIVE_USER_FAVORITED_SONGS
  // RECEIVE_CURRENT_USER_FAVORITED_SONGS
} from "../actions/songsAction";

export const favSongsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_FAVORITED_SONGS:
      // debugger;
      return normalize(action.userFavoritedSongs);
    // case RECEIVE_CURRENT_USER_FAVORITED_SONGS:
    //   // debugger;
    //   return normalize(action.userFavoritedSongs);
    default:
      return oldState;
  }
};

const normalize = arr => {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el;
  });
  return obj;
};
