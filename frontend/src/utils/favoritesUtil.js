import axios from "axios";

export const getAllFavorites = () => {
  return axios.get("/favorites");
};

export const getFavoritesForSong = id => {
  return axios.get(`/favorites/forSong/${id}`);
};

export const createFavorite = favorite => {
  axios.post("/favorites", favorite);
};

export const deleteFavorite = id => {
  axios.delete(`/favorites/${id}`);
};
