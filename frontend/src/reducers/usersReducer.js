// import merge from 'lodash';
import { RECEIVE_USERS } from '../actions/usersAction';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return normalize(action.users);
    default:
      return oldState;
  }
};

let normalize = arr => {
  let obj = {};
  arr.forEach(el => {
    return (obj[el.id] = el);
  });
  return obj;
};
