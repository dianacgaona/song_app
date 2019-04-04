import React, { Component } from 'react';
import '../../css/index.css';
import '../../css/songs.css';
import SongItemContainer from '../songitem/SongItemContainer';

class AllSongs extends Component {
  componentDidMount() {
    this.props.getAllSongs();
    this.props.getAllUsers();
    this.props.getAllFavorites();
    this.props.getAllGenres();
  }

  displaySongs = () => {
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
    return songItems.sort((a, b) => {
      return b.props.totalFaves - a.props.totalFaves;
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

  render() {
    console.log(this.props, 'PROPS OF COMPONENT');
    return (
      <div className="main_container">
        <h1 className="page_title"> Songs By Popularity</h1>
        <div className="songs_maindiv">{this.displaySongs()}</div>
      </div>
    );
  }
}

export default AllSongs;
