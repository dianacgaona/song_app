import axios from "axios";

export const getAllSongs = () => {
  return axios.get("/songs");
};

export const createSong = song => {
  return axios.post("/songs", song);
};
