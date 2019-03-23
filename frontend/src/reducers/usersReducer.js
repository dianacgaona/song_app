// import merge from 'lodash';
import { RECEIVE_USER } from "../actions/usersAction";

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger;
  switch (action.type) {
    case RECEIVE_USER:
      // debugger;
      return { user: action.user };
    default:
      // debugger;
      return oldState;
  }
};

//using {user: action.user}, because this is not working:
// merge({}, oldState, { [action.user.id]: action.user });
