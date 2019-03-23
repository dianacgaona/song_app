import { RECEIVE_GENRES } from '../actions/genresAction';

export const genresReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GENRES:
      return normalize(action.genres);
    default:
      return oldState;
  }
};

const normalize = genres => {
  let obj = {};
  genres.forEach(genre => {
    obj[genre.id] = genre;
  });
  return obj;
};
