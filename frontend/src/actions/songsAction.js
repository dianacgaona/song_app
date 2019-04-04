import * as songsApi from "../utils/songsUtil";

export let RECEIVE_SONGS = "RECEIVE_SONGS";
export let RECEIVE_SONG = "RECEIVE_SONG";

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

export const getAllSongs = () => dispatch => {
  return songsApi
    .getAllSongs()
    .then(res => {
      // debugger;
      return dispatch(receivedSongs(res.data.songs));
    })
    .catch(err => {
      console.log(err);
    });
};
