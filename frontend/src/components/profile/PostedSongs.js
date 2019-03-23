import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostedSongs extends Component {
  state = {
    postedSongs: true,
    favoritedSongs: true
  };
  componentDidMount() {
    // debugger;

    this.props.getUserFavoriteSongs(parseInt(this.props.match.params.id));
    this.props.getUserPostedSongs(parseInt(this.props.match.params.id));
  }

  togglePostedToFavorite = () => {
    if (this.state.postedSongs) {
      return <div>{this.displayPostedSongs()}</div>;
    } else if (this.state.favoritedSongs) {
      return <div>{this.displayFavoritedSongs}</div>;
    }
  };

  handleChange = e => {
    this.setState({
      postedSongs: e.target.value
    });
  };

  displayPostedSongs = () => {
    let postedSongs = Object.values(this.props.userPostedSongs);
    return postedSongs.map(song => {
      return (
        <div key={song.id} className="songs_container">
          <div className="songs_left">
            <img src={song.img_url} alt="" className="songs_img" />
          </div>
          <div className="songs_right">
            <div className="songs_title">
              <div>
                <h3>{song.title}</h3>
              </div>
              <div className="songs_favorite">
                <p>{song.favorites} favorites</p>
                <button>Favorite</button>
              </div>
            </div>
            <div className="songs_poster">
              <Link to={`/users/${song.poster_id}`}>{song.poster}</Link>
              <span className="songs_separator">·</span>
              <p>{song.genre}</p>
            </div>
            <div className="songs_comments">
              <div>{song.comments}</div>
            </div>
            <div className="songs_form">
              <form className="form">
                <input
                  type="text"
                  placeholder="Comment"
                  className="form_input"
                />
                <button className="form_button">Add Comment</button>
              </form>
            </div>
          </div>
        </div>
      );
    });
  };

  displayFavoritedSongs = () => {
    let favoritedSongs = Object.values(this.props.userFavoritedSongs);
    return favoritedSongs.map(song => {
      return (
        <div key={song.id} className="songs_container">
          <div className="songs_left">
            <img src={song.img_url} alt="" className="songs_img" />
          </div>
          <div className="songs_right">
            <div className="songs_title">
              <div>
                <h3>{song.title}</h3>
              </div>
              <div className="songs_favorite">
                <p>{song.favorites} favorites</p>
                <button>Favorite</button>
              </div>
            </div>
            <div className="songs_poster">
              <Link to={`/users/${song.poster_id}`}>{song.poster}</Link>
              <span className="songs_separator">·</span>
              <p>{song.genre}</p>
            </div>
            <div className="songs_comments">
              <div>{song.comments}</div>
            </div>
            <div className="songs_form">
              <form className="form">
                <input
                  type="text"
                  placeholder="Comment"
                  className="form_input"
                />
                <button className="form_button">Add Comment</button>
              </form>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props, "MY PROPS IN POSTED SONGS");
    // debugger;
    return (
      <div className="main_container">
        <button
          name="postedSongs"
          value={this.state.postedSongs}
          onChange={this.handleChange}
        >
          Posted
        </button>
        <button
          name="favoritedSongs"
          value={this.state.favoritedSongs}
          onChange={this.handleChange}
        >
          Favorited
        </button>
        {this.togglePostedToFavorite()}
      </div>
    );
  }
}

export default PostedSongs;

// <div> POSTED: {this.displayPostedSongs()}</div>
// <div> FAVORITED: {this.displayFavoritedSongs()}</div>
