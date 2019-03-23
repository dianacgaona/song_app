import * as usersApi from '../utils/usersUtil';

export let RECEIVE_USER = 'RECEIVE_USER';
// export let RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// debugger;
export const receivedUser = user => {
  // debugger;
  return {
    type: RECEIVE_USER,
    user: user,
  };
};

// export const receivedCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser: currentUser,
// });

export const getSingleUser = id => dispatch => {
  // debugger;
  return usersApi
    .getSingleUser(id)
    .then(res => {
      // debugger;
      return dispatch(receivedUser(res.data.user));
    })
    .catch(err => {
      console.log(err);
    });
};

// export const getCurrentUser = () => dispatch => {
//   return usersApi
//     .getCurrentUser()
//     .then(res => {
//       return dispatch(receivedCurrentUser(res.data.user));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
