import axios from "axios";

export const getAllFavorites = () => {
  return axios.get("/favorites");
};

export const createFavorite = favorite => {
  return axios.post("/favorites", favorite);
};

export const deleteFavorite = (userId, songId) => {
  return axios.delete(`/favorites/${userId}/${songId}`);
};
