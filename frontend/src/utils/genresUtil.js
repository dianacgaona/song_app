import axios from "axios";

export const getAllGenres = () => {
  return axios.get("/genres");
};
