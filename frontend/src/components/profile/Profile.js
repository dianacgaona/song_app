import React, { Component } from 'react';
import SongItemContainer from '../songitem/SongItemContainer';

class Profile extends Component {
  state = {
    toggle: true,
    title: '',
    img_url: '',
    genre_id: '',
  };

  componentDidMount() {
    this.props.getAllSongs();
    this.props.getAllUsers();
    this.props.getAllFavorites();
    this.props.getAllGenres();
    this.props.getAllComments();
  }

  displayCreated = () => {
    let { songs } = this.props;
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
    return songItems.filter(song => {
      return song.props.userID === parseInt(this.props.match.params.id);
    });
  };

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

  displayFaved = () => {
    let { songs, favorites } = this.props;

    let userFaves = favorites.filter(fave => {
      return fave.user_id === parseInt(this.props.match.params.id);
    });
    let faveSongs = userFaves.map(faved => {
      return faved.song_id;
    });
    let faveItems = songs.filter(item => {
      return faveSongs.includes(item.id);
    });

    let songItems = faveItems.map(song => {
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
    return songItems;
  };

  togglePosted = () => {
    this.setState({
      toggle: true,
    });
  };

  toggleFaved = () => {
    this.setState({
      toggle: false,
    });
  };

  genreList = () => {
    let { genres } = this.props;
    let genreItems = genres.map(genre => {
      return (
        <option key={genre.id} name="genre_id" value={genre.id}>
          {genre.genre_name}
        </option>
      );
    });
    return genreItems;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelect = e => {
    this.setState({
      genre_id: e.target.value,
    });
  };

  handleSubmit = e => {
    let { title, img_url, genre_id } = this.state;
    e.preventDefault();
    debugger;
    this.props
      .createSong({
        title: title,
        img_url: img_url,
        user_id: parseInt(this.props.match.params.id),
        genre_id: parseInt(genre_id),
      })
      .then(() => {
        this.props.getAllSongs();
      });
  };

  displayForm = () => {
    if (this.props.currentUser.id === parseInt(this.props.match.params.id)) {
      return (
        <div className="form_div">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="img_url"
              value={this.state.img_url}
              onChange={this.handleChange}
              placeholder="Image URL"
            />
            <select onChange={this.handleSelect}>
              <option />
              {this.genreList()}
            </select>
            <button>Add song</button>
          </form>
        </div>
      );
    }
  };

  render() {
    console.log(this.props.createSong, 'CREATE SONG');
    console.log(this.props, 'PROPS IN PROFILE');
    // debugger;
    return (
      <div className="main_container">
        <h1>Username goes here </h1>
        {!this.props.currentUser ? <div>loading</div> : this.displayForm()}
        <div>
          <button onClick={this.togglePosted}>Posted</button>
          <button onClick={this.toggleFaved}>Faved</button>
        </div>
        {this.state.toggle ? (
          <div>
            <h1>Posted</h1>
            <div>{this.displayCreated()}</div>
          </div>
        ) : (
          <div>
            <h1>Favorited</h1>
            <div>{this.displayFaved()}</div>
          </div>
        )}
        {/* <div className="page_title">{this.displayUser()}</div> */}
      </div>
    );
  }
}

export default Profile;
