import axios from "axios";

export const getAllComments = () => {
  return axios.get("/comments");
};

export const getCommentsForASong = id => {
  return axios.get(`/comments/${id}`);
};

export const createComment = comment => {
  axios.post("/comments", comment);
};
