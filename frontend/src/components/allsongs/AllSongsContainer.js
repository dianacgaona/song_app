import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllSongs } from '../../actions/songsAction';
import { getAllUsers } from '../../actions/usersAction';
import { getAllGenres } from '../../actions/genresAction';
import { getAllFavorites } from '../../actions/favoritesAction';
import { getAllComments } from '../../actions/commentsAction';
import AllSongs from './AllSongs';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.songs),
    users: Object.values(state.users),
    favorites: Object.values(state.favorites),
    comments: Object.values(state.comments),
    genres: Object.values(state.genres),
    currentUser: state.users[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllSongs: () => dispatch(getAllSongs()),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllFavorites: () => dispatch(getAllFavorites()),
    getAllComments: () => dispatch(getAllComments()),
    getAllGenres: () => dispatch(getAllGenres()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllSongs)
);
