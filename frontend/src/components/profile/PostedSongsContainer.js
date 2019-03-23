import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostedSongs from "./PostedSongs";
import {
  getUserFavoriteSongs,
  getUserPostedSongs
} from "../../actions/songsAction";

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    userPostedSongs: Object.values(state.userPostedSongs),
    userFavoritedSongs: Object.values(state.userFavoritedSongs)
  };
};

// I need to understand why it's state.user and it's not this line:
// user: state.user[ownProps.match.params.id]

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    getUserFavoriteSongs: id => dispatch(getUserFavoriteSongs(id)),
    getUserPostedSongs: id => dispatch(getUserPostedSongs(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostedSongs)
);
