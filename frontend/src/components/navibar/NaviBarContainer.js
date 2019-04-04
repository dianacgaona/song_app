import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NaviBar from './NaviBar';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id],
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(NaviBar)
);
