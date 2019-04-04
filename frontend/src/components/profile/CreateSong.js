import React, { Component } from "react";

class CreateSong extends Component {
  state = {
    title: "",
    img_url: "",
    genre_id: ""
  };

  componentDidMount = () => {
    let id = this.props.user.id;
    this.props.getOneGenre(id);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitSong = e => {
    e.preventDefault();
    let songInfo = {
      title: this.state.title,
      img_url: this.state.img_url,
      genre_id: parseInt(this.state.genre_id),
      user_id: this.props.user.id
    };
    this.setState({
      title: "",
      img_url: "",
      genre_name: ""
    });
    return this.props.createSong(songInfo);
  };

  displayOptionGenre = () => {
    let genreList = Object.values(this.props.genres);
    return genreList.map(genre => {
      return (
        <option key={genre.id} value={genre.id}>
          {genre.genre_name}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        <form>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.title}
            name="title"
            placeholder="Title"
          />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.img_url}
            name="img_url"
            placeholder="Image URL"
          />
          <select onChange={this.handleChange} name="genre_id">
            <option>Select Genre</option>
            {this.displayOptionGenre()}
          </select>
          <button onClick={this.onSubmitSong} type="submit">
            CreateSong
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSong;
