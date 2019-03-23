import axios from 'axios';

export const getSingleUser = id => {
  // debugger;
  return axios.get(`/users/${id}`);
};

// export const getCurrentUser = id => {
//   return axios.get(`/currentUsers/${id}`);
// };
