import merge from 'lodash';
import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/songsAction';

export const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return merge({}, oldState, { [action.song.id]: action.song });
    default:
      return oldState;
  }
};

// const normalize = songs => {
//   let obj = {};
//   songs.forEach(song => {
//     obj[song.id] = song;
//   });
//   return obj;
// };
