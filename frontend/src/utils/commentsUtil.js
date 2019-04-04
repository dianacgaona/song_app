import axios from 'axios';

export const getAllComments = () => {
  return axios.get('/comments');
};

export const createComment = comment => {
  return axios.post('/comments', comment);
};

export const getAllCommentsForSong = id => {
  return axios.get(`/comments/${id}`);
};
