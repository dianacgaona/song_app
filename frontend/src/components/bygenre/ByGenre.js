import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/songs.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import GenresContainer from "./GenresContainer";

class AllSongs extends Component {
  state = {
    genres: [],
    songs: [],
    selectedGenre: '',
    formSubmitted: false,
    searchResults: [],
  };

  componentDidMount() {
    this.props.fetchAllSongs();
    this.getAllSongs();
    this.genreList();
  }
  //   this.props.getGenres();

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
    });
  };

  genreList = () => {
    axios.get('/genres').then(res => {
      this.setState({
        genres: res.data.genres,
      });
    });
  };

  getAllSongs = () => {
    axios.get('/songs').then(res => {
      this.setState({
        songs: res.data.songs,
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

  render() {
    const { selectedGenre, formSubmitted, songs } = this.state;
    console.log(this.state, 'STATEEEE');

    let songFilter = songs;

    if (formSubmitted && selectedGenre) {
      songFilter = songs.filter(song => {
        return song.genre === selectedGenre;
      });
    }

    let displayAllSongs = songFilter.map(song => {
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

    return (
      <div className="main_container">
        <h1 className="page_title"> Songs By Genre</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <select name="selectedGenre" onChange={this.handleSelect}>
              <option key="0" value="">
                {' '}
              </option>
              {this.displayGenres()}
            </select>
            <button type="submit">Find Songs</button>
          </form>
        </div>
        <div className="songs_maindiv">{displayAllSongs}</div>
      </div>
    );
  }
}

export default AllSongs;
