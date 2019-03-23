import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    genres: []
  };

  componentDidMount() {
    // debugger;
    // this.props.getCurrentUserFavoriteSongs(
    //   parseInt(this.props.match.params.id)
    // );
    // this.props.getCurrentUserPostedSongs(parseInt(this.props.match.params.id));
    this.props.getCurrentUser(parseInt(this.props.match.params.id));
    this.genreList();
  }

  genreList = () => {
    axios.get("/genres").then(res => {
      this.setState({
        genres: res.data.genres
      });
    });
  };

  displayGenres = () => {
    return this.state.genres.map(genre => {
      return (
        <option key={genre.id} value={genre.genre_name}>
          {genre.genre_name}
        </option>
      );
    });
  };

  displayUser = id => {
    // debugger;
    let userInfo = Object.values(this.props.user);
    return userInfo.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.username}</h1>
        </div>
      );
    });
  };

  displayPostedSongs = () => {
    let postedSongs = Object.values(this.props.currentUserPostedSongs);
    return postedSongs.map(song => {
      return (
        <div key={song.id}>
          <div>{song.title}</div>
          <img src={song.img_url} alt="" />
        </div>
      );
    });
  };

  displayFavoritedSongs = () => {
    let favoritedSongs = Object.values(this.props.currentUserFavoritedSongs);
    return favoritedSongs.map(song => {
      return (
        <div key={song.id}>
          <div>{song.title}</div>
          <img src={song.img_url} alt="" />
        </div>
      );
    });
  };

  render() {
    // debugger;
    // console.log(Object.values(this.props.user), 'USER PROPS INSIDE PROFILE');
    // console.log(this.props, 'ALL PROPS IN PROFILE');
    return (
      <div className="main_container">
        <div>
          <form>
            <label>Create a Song</label>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Image URL" />
            <select name="selectedGenre">
              <option key="0" value="">
                {" "}
              </option>
              {this.displayGenres()}
            </select>
            <button>Create Song</button>
          </form>
        </div>
        {!this.props.toggle ? <div>Posted</div> : <div>Favorited</div>}
        <button>Posted</button>
        <button>Favorited</button>
      </div>
    );
  }
}

// <div> POSTED: {this.displayPostedSongs()}</div>
// <div> FAVORITED: {this.displayFavoritedSongs()}</div>
// <div>{this.displayUser()}</div>

export default Profile;
