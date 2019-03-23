import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getSingleUser } from '../../actions/usersAction';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    user: state.user,
  };
};

// I need to understand why it's state.user and it's not this line:
// user: state.user[ownProps.match.params.id]

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    getSingleUser: id => dispatch(getSingleUser(id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
