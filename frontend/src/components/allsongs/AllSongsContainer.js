import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllSongs } from '../../actions/songsAction';
import AllSongs from './AllSongs';

const mapStateToProps = state => {
  return {
    songs: Object.values(state.songs),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllSongs)
);
