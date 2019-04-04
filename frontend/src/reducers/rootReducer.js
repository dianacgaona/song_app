import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { songsReducer } from './songsReducer';
import { commentsReducer } from './commentsReducer';
import { favoritesReducer } from './favoritesReducer';
import { genresReducer } from './genresReducer';

// debugger;
const rootReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
  genres: genresReducer,
});

export default rootReducer;
