import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/songs.css';
import SongItemContainer from '../songitem/SongItemContainer';

class AllSongs extends Component {
  state = {
    input: '',
    search: '',
  };

  componentDidMount() {
    this.props.getAllSongs();
    this.props.getAllUsers();
    this.props.getAllFavorites();
    this.props.getAllGenres();
    // this.props.getAllComments();
  }

  showFaves = songID => {
    let { favorites } = this.props;
    let faves = favorites.filter(fave => {
      return fave.song_id === songID;
    });
    if (faves.length) {
      return faves.length;
    } else {
      return 0;
    }
  };

  displaySongs = songs => {
    let songItems = songs.map(song => {
      return (
        <SongItemContainer
          key={song.id}
          songID={song.id}
          song_title={song.title}
          song_img={song.img_url}
          genreID={song.genre_id}
          userID={song.poster_id}
          username={song.poster}
          song_genre={song.genre}
          totalFaves={this.showFaves(song.id)}
        />
      );
    });
    return <div>{songItems}</div>;
  };

  searchForSongs = songs => {
    let { search } = this.state;
    return songs.filter(song => {
      return song.title.toLowerCase().includes(search.toLowerCase());
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { input } = this.state;
    this.setState({
      search: input,
      input: '',
    });
  };

  render() {
    console.log(this.props, 'PROPS IN ALL SONGS');
    let { songs } = this.props;
    let songsFiltered = this.searchForSongs(songs);
    return (
      <div className="main_container">
        <h1 className="page_title">Search By Title</h1>

        <div className="form_div">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Title"
              className="form_input"
            />
            <button className="form_button">Search</button>
          </form>
        </div>

        <div className="songs_maindiv">{this.displaySongs(songsFiltered)}</div>
      </div>
    );
  }
}

export default AllSongs;
