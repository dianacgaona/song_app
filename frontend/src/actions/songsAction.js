import * as songsApi from "../utils/songsUtil";

export let RECEIVE_SONGS = "RECEIVE_SONGS";
export let RECEIVE_SONG = "RECEIVE_SONG";
export let RECEIVE_USER_POSTED_SONGS = "RECEIVE_USER_POSTED_SONGS";
export let RECEIVE_USER_FAVORITED_SONGS = "RECEIVE_USER_FAVORITED_SONGS";
// export let RECEIVE_CURRENT_USER_POSTED_SONGS =
//   'RECEIVE_CURRENT_USER_POSTED_SONGS';
// export let RECEIVE_CURRENT_USER_FAVORITED_SONGS =
//   'RECEIVE_CURRENT_USER_FAVORITED_SONGS';

export const receivedSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs: songs
  };
};

export const receivedSong = song => {
  return {
    type: RECEIVE_SONG,
    song: song
  };
};

export const receivedUserPostedSongs = userPostedSongs => {
  // debugger;
  return {
    type: RECEIVE_USER_POSTED_SONGS,
    userPostedSongs: userPostedSongs
  };
};

export const receivedUserFavoritedSongs = userFavoritedSongs => {
  // debugger;
  return {
    type: RECEIVE_USER_FAVORITED_SONGS,
    userFavoritedSongs: userFavoritedSongs
  };
};

// export const receivedCurrentUserPostedSongs = currentUserPostedSongs => {
//   // debugger;
//   return {
//     type: RECEIVE_CURRENT_USER_POSTED_SONGS,
//     currentUserPostedSongs: currentUserPostedSongs,
//   };
// };
//
// export const receivedCurrentUserFavoritedSongs = currentUserFavoritedSongs => {
//   // debugger;
//   return {
//     type: RECEIVE_CURRENT_USER_FAVORITED_SONGS,
//     currentUserFavoritedSongs: currentUserFavoritedSongs,
//   };
// };

export const createSong = song => dispatch => {
  return songsApi
    .createSong(song)
    .then(res => {
      return dispatch(receivedSong(res.data.song));
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchAllSongs = () => dispatch => {
  return songsApi
    .fetchAllSongs()
    .then(res => {
      // debugger;
      return dispatch(receivedSongs(res.data.songs));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUserFavoriteSongs = id => dispatch => {
  // debugger;
  return songsApi
    .getUserFavoriteSongs(id)
    .then(res => {
      console.log(res, "RES OF FAVORITE");
      return dispatch(receivedUserFavoritedSongs(res.data.songs));
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUserPostedSongs = id => dispatch => {
  // debugger;
  return songsApi
    .getUserPostedSongs(id)
    .then(res => {
      console.log(res, "RES OF POSTED SONGS");
      return dispatch(receivedUserPostedSongs(res.data.songs));
    })
    .catch(err => {
      console.log(err);
    });
};

// export const getCurrentUserFavoriteSongs = id => dispatch => {
//   // debugger;
//   return songsApi
//     .getCurrentUserFavoriteSongs(id)
//     .then(res => {
//       console.log(res, 'RES OF FAVORITE');
//       return dispatch(receivedCurrentUserFavoritedSongs(res.data.songs));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
//
// export const getCurrentUserPostedSongs = id => dispatch => {
//   // debugger;
//   return songsApi
//     .getCurrentUserPostedSongs(id)
//     .then(res => {
//       console.log(res, 'RES OF POSTED SONGS');
//       return dispatch(receivedCurrentUserPostedSongs(res.data.songs));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
