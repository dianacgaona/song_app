import React, { Component } from 'react';

class Genres extends Component {
  componentDidMount() {
    // debugger;
    this.props.getAllGenres();
  }

  displayGenres = () => {
    return this.props.genres.map(genre => {
      return (
        <option key={genre.id} value={genre.genre_name}>
          {genre.genre_name}
        </option>
      );
    });
  };

  render() {
    // debugger;
    return (
      <select name="selectedGenre">
        <option key="0" value="">
          {' '}
        </option>
        {this.displayGenres()}
      </select>
    );
  }
}

export default Genres;
