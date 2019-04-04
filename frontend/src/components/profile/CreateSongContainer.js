import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateSong from "./CreateSong";
// import { getCurrentUser } from '../../actions/usersAction';
import { createSong } from "../../actions/songsAction";

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    user: state.user,
    songs: Object.values(state.songs),
    genres: Object.values(state.genres)
  };
};

// I need to understand why it's state.user and it's not this line:
// user: state.user[ownProps.match.params.id]

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    createSong: song => dispatch(createSong(song))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateSong)
);
