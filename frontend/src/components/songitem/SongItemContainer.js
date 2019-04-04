import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllFavorites,
  createFavorite,
  deleteFavorite
} from "../../actions/favoritesAction";
import {
  // getAllComments,
  getAllCommentsForSong,
  createComment
} from "../../actions/commentsAction";
import SongItem from "./SongItem";

const mapStateToProps = (state, ownProps) => {
  return {
    songs: Object.values(state.songs),
    users: Object.values(state.users),
    favorites: Object.values(state.favorites),
    comments: state.comments[ownProps.songID],
    genres: Object.values(state.genres),
    currentUser: state.users[1],
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllFavorites: () => dispatch(getAllFavorites()),
    // getAllComments: () => dispatch(getAllComments()),
    getAllCommentsForSong: id => dispatch(getAllCommentsForSong(id)),
    createComment: comment => dispatch(createComment(comment)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favorite => dispatch(deleteFavorite(favorite))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SongItem)
);
