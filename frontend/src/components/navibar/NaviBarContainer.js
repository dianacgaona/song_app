import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NaviBar from "./NaviBar";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user[ownProps.match.params.id]
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(NaviBar)
);
