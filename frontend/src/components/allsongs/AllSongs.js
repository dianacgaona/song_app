import React, { Component } from "react";
import "../../css/index.css";
import "../../css/songs.css";
import { Link } from "react-router-dom";
import axios from "axios";

class AllSongs extends Component {
  state = {
    search: "",
    songs: [],
    songSearchResults: [],
    commentInput: ""
  };

  componentDidMount() {
    this.props.fetchAllSongs();
    this.getAllSongs();
  }

  getAllSongs = () => {
    axios.get("/songs").then(res => {
      this.setState({
        songs: res.data.songs,
        songSearchResults: res.data.songs
      });
    });
  };

  handleChange = e => {
    let searchResult = this.state.songs.filter(song => {
      return song.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      search: e.target.value,
      songSearchResults: searchResult
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { search, songs } = this.state;
    let songResults = songs.filter(songs => {
      return songs.title.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({
      searchResults: songResults
    });
  };

  displayAllSongs = () => {
    return this.state.songSearchResults.map(song => {
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
    return (
      <div className="main_container">
        <div className="form_div">
          <h2 className="page_title">Search By Title</h2>
          <form className="form" onSubmit={this.handleSearch}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="Title"
              className="form_input"
            />
            <button className="form_button">Search</button>
          </form>
        </div>

        <div className="songs_maindiv">{this.displayAllSongs()}</div>
      </div>
    );
  }
}

export default AllSongs;
