import axios from "axios";

export const fetchAllSongs = () => {
  return axios.get("/songs");
};

export const createSong = song => {
  return axios.post("/songs", song);
};

export const getUserFavoriteSongs = id => {
  // debugger;
  return axios.get(`/users/${id}/favorited`);
};

export const getUserPostedSongs = id => {
  // debugger;
  return axios.get(`/users/${id}/favorited`);
};

// export const getCurrentUserPostedSongs = id => {
//   return axios.get(`/currentUser/${id}/posted`);
// };
//
// export const getCurrentUserFavoriteSongs = id => {
//   return axios.get(`/currentUser/${id}/posted`);
// };
