import React, { Component } from "react";
import PostedSongsContainer from "./PostedSongsContainer";
import CreateSongContainer from "./CreateSongContainer";

class Profile extends Component {
  componentDidMount() {
    // debugger;
    this.props.getSingleUser(parseInt(this.props.match.params.id));
  }

  displayUser = id => {
    // debugger;
    let userInfo = Object.values(this.props.user);
    return userInfo.map((user, i) => {
      return <h1 key={i}>{user.username}</h1>;
    });
  };

  displaySongs = () => {
    return (
      <div>
        <PostedSongsContainer />
      </div>
    );
  };

  displayCreateSongs = () => {
    return (
      <div>
        <CreateSongContainer />
      </div>
    );
  };
  render() {
    // debugger;
    return (
      <div className="main_container">
        <div className="page_title">{this.displayUser()}</div>
        <div>{this.displayCreateSongs()}</div>
        <div>{this.displaySongs()}</div>
      </div>
    );
  }
}

export default Profile;
