import { merge } from "lodash";
import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE
} from "../actions/favoritesAction";

export const favoritesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return normalize(action.favorites);
    case RECEIVE_FAVORITE:
      return merge({}, oldState, { [action.favorite.id]: action.favorite });
    default:
      return oldState;
  }
};

const normalize = favorites => {
  let obj = {};
  favorites.forEach(favorite => {
    obj[favorite.id] = favorite;
  });
  return obj;
};
