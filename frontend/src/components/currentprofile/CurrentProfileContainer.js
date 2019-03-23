// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import CurrentProfile from "./CurrentProfile";
// import { getCurrentUser } from "../../actions/usersAction";
// import {
//   createSong,
//   getCurrentUserFavoriteSongs,
//   getCurrentUserPostedSongs
// } from "../../actions/songsAction";
//
// const mapStateToProps = (state, ownProps) => {
//   // debugger;
//   return {
//     currentUser: state.currentUser,
//     currentUserPostedSongs: state.currentUserPostedSongs,
//     currentUserFavoritedSongs: state.currentUserFavoritedSongs
//   };
// };
//
// // user: state.user,
// // I need to understand why it's state.user and it's not this line:
// // user: state.user[ownProps.match.params.id]
//
// const mapDispatchToProps = dispatch => {
//   // debugger;
//   return {
//     getCurrentUser: () => dispatch(getCurrentUser()),
//     createSong: song => dispatch(createSong(song)),
//     getCurrentUserFavoriteSongs: id =>
//       dispatch(getCurrentUserFavoriteSongs(id)),
//     getCurrentUserPostedSongs: id => dispatch(getCurrentUserPostedSongs(id))
//   };
// };
//
// // getSingleUser: id => dispatch(getSingleUser(id)),
//
// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CurrentProfile)
// );
