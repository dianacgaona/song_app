import * as favoritesApi from "../utils/favoritesUtil";

export let RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export let RECEIVE_FAVORITE = "RECEIVE_FAVORITE";

export const receivedFavorites = favorites => {
  return {
    type: RECEIVE_FAVORITES,
    favorites: favorites
  };
};

export const receivedFavorite = favorite => {
  return {
    type: RECEIVE_FAVORITE,
    favorite: favorite
  };
};

export const createFavorite = favorite => dispatch => {
  return favoritesApi
    .createFavorite(favorite)
    .then(res => {
      return dispatch(receivedFavorite(res.data.favorite));
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteFavorite = favorite => dispatch => {
  return favoritesApi
    .deleteFavorite(favorite.user_id, favorite.song_id)
    .then(res => {
      return dispatch(receivedFavorite(res.data.favorite));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAllFavorites = () => dispatch => {
  return favoritesApi
    .getAllFavorites()
    .then(res => {
      // debugger;
      return dispatch(receivedFavorites(res.data.favorites));
    })
    .catch(err => {
      console.log(err);
    });
};
