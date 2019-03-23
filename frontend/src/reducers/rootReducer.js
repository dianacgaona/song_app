import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { songsReducer } from "./songsReducer";
import { commentsReducer } from "./commentsReducer";
import { favoritesReducer } from "./favoritesReducer";
import { genresReducer } from "./genresReducer";
import { favSongsReducer } from "./favSongsReducer";
import { currentUserReducer } from "./currentUserReducer";

// debugger;
const rootReducer = combineReducers({
  user: usersReducer,
  songs: songsReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
  genres: genresReducer,
  userPostedSongs: songsReducer,
  userFavoritedSongs: favSongsReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
