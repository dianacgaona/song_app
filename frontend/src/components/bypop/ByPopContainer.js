import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllSongs } from "../../actions/songsAction";
import ByPop from "./ByPop";

const mapStateToProps = state => {
  return {
    songs: Object.values(state.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ByPop)
);
