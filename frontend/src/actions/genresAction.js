import * as genresApi from "../utils/genresUtil";

export let RECEIVE_GENRES = "RECEIVE_GENRES";

export const receivedGenres = genres => {
  return {
    type: RECEIVE_GENRES,
    genres: genres
  };
};

export const getAllGenres = () => dispatch => {
  return genresApi
    .getAllGenres()
    .then(res => {
      // debugger;
      return dispatch(receivedGenres(res.data.genres));
    })
    .catch(err => {
      console.log(err);
    });
};
