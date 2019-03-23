import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllGenres } from "../../actions/genresAction";
import Genres from "./Genres";

const mapStateToProps = state => {
  return {
    genres: Object.values(state.genres)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllGenres: () => dispatch(getAllGenres())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Genres)
);
