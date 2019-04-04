import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SongItem extends Component {
  state = {
    commentInput: '',
  };

  componentDidMount() {
    this.props.getAllCommentsForSong(this.props.songID);
  }

  displaySongComments = songID => {
    let { comments } = this.props;
    if (comments === undefined) return <div>loading</div>;
    let songComments = comments.map(comment => {
      return (
        <div key={comment.id}>
          <Link to={`/users/${comment.commenter_id}`}>
            {' '}
            {comment.commenter}
          </Link>
          <p>{comment.comments}</p>
        </div>
      );
    });
    return songComments;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .createComment({
        comment_body: this.state.commentInput,
        user_id: this.props.currentUser.id,
        song_id: this.props.songID,
      })
      .then(() => {
        this.props.getAllCommentsForSong(this.props.songID);
      });
    this.setState({
      commentInput: '',
    });
  };

  isFaved = songID => {
    let { favorites, currentUser } = this.props;
    return favorites.find(fave => {
      return fave.user_id === currentUser.id && fave.song_id === songID;
    });
  };

  toFave = e => {
    e.preventDefault();
    this.props
      .createFavorite({
        user_id: this.props.currentUser.id,
        song_id: this.props.songID,
      })
      .then(() => {});
  };

  toUnfave = e => {
    e.preventDefault();
    this.props
      .deleteFavorite({
        user_id: this.props.currentUser.id,
        song_id: this.props.songID,
      })
      .then(() => {
        this.props.getAllFavorites();
      });
  };

  render() {
    let {
      songID,
      song_img,
      song_title,
      userID,
      username,
      song_genre,
      totalFaves,
    } = this.props;
    return (
      <div className="songs_container">
        <div className="songs_left">
          <img className="songs_img" src={song_img} alt="/" />
        </div>
        <div className="songs_right">
          <div className="songs_title">
            <div>
              <h3>{song_title}</h3>
            </div>
            <div className="songs_favorite">
              <p> {totalFaves} favorites</p>
              {!this.isFaved(songID) ? (
                <button onClick={this.toFave}>favorite</button>
              ) : (
                <button onClick={this.toUnfave}>unfavorite</button>
              )}
            </div>
          </div>
          <div className="songs_poster">
            <Link to={`/users/${userID}`}>{username}</Link>
            <span className="songs_separator">·</span>
            <p>{song_genre}</p>
          </div>
          <div className="songs_comments">
            {this.props.songs ? this.displaySongComments(songID) : ''}
          </div>
          <div className="songs_form">
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder=" Write a comment..."
                name="commentInput"
                value={this.state.commentInput}
                onChange={this.handleChange}
                className="form_input"
              />
              <button className="form_button">Add comment</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SongItem;
