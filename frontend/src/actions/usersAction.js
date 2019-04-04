import * as usersApi from "../utils/usersUtil";

export let RECEIVE_USERS = "RECEIVE_USERS";

// debugger;
export const receivedUsers = users => {
  // debugger;
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

export const getAllUsers = () => dispatch => {
  return usersApi
    .getAllUsers()
    .then(res => {
      // debugger;
      return dispatch(receivedUsers(res.data.users));
    })
    .catch(err => {
      console.log(err);
    });
};
