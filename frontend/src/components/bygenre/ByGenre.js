import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/songs.css';
import SongItemContainer from '../songitem/SongItemContainer';

class AllSongs extends Component {
  state = {
    selectedGenre: '',
    genreToDisplay: '',
  };

  componentDidMount() {
    this.props.getAllGenres();
    this.props.getAllFavorites();
    this.props.getAllUsers();
    this.props.getAllSongs();
  }

  displaySongs = () => {
    let { songs, genres } = this.props;
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
    if (!this.state.genreToDisplay) return songItems;
    let genreSelected = genres.filter(genre => {
      return (
        this.state.genreToDisplay.toLowerCase() ===
        genre.genre_name.toLowerCase()
      );
    });
    return songItems.filter(song => {
      return song.props.genreID === genreSelected['0'].id;
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

  displayGenreList = () => {
    let { genres } = this.props;
    let genreList = genres.map(genre => {
      return (
        <option key={genre.id} value={genre.genre_name}>
          {genre.genre_name}
        </option>
      );
    });
    return genreList;
  };

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      genreToDisplay: this.state.selectedGenre,
    });
  };

  render() {
    return (
      <div className="main_container">
        <h1 className="page_title"> Songs By Genre</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <select name="selectedGenre" onChange={this.handleSelect}>
              <option key="0" value="">
                {' '}
              </option>
              {this.displayGenreList()}
            </select>
            <button type="submit">Find Songs</button>
          </form>
        </div>
        <div className="songs_maindiv">{this.displaySongs()}</div>
      </div>
    );
  }
}

export default AllSongs;

//
// let displayAllSongs = songFilter.map(song => {
//   return (
//     <div key={song.id} className="songs_container">
//       <div className="songs_left">
//         <img src={song.img_url} alt="" className="songs_img" />
//       </div>
//       <div className="songs_right">
//         <div className="songs_title">
//           <div>
//             <h3>{song.title}</h3>
//           </div>
//           <div className="songs_favorite">
//             <p>{song.favorites} favorites</p>
//             <button>Favorite</button>
//           </div>
//         </div>
//         <div className="songs_poster">
//           <Link to={`/users/${song.poster_id}`}>{song.poster}</Link>
//           <span className="songs_separator">·</span>
//           <p>{song.genre}</p>
//         </div>
//         <div className="songs_comments">
//           <div>{song.comments}</div>
//         </div>
//         <div className="songs_form">
//           <form className="form">
//             <input
//               type="text"
//               placeholder="Comment"
//               className="form_input"
//               />
//             <button className="form_button">Add Comment</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// });
