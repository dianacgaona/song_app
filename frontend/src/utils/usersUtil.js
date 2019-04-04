import axios from "axios";

export const getAllUsers = () => {
  // debugger;
  return axios.get(`/users`);
};

export const getSingleUser = id => {
  // debugger;
  return axios.get(`/users/${id}`);
};
