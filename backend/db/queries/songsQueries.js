const { db } = require("../index.js");

const getAllSongs = (req, res, next) => {
  db.any(
    "SELECT songs.id, title, img_url, genre_id, songs.user_id AS poster_id, users.username as poster, genres.genre_name AS genre FROM songs JOIN users ON users.id = songs.user_id JOIN genres ON genres.id = songs.genre_id GROUP BY songs.id, title, img_url, poster_id, poster, genre"
  )
    .then(songs => {
      res.status(200).json({
        status: "success!",
        songs: songs,
        message: "Songs received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSongsForGenre = (req, res, next) => {
  let genreId = parseInt(req.params.id);
  db.any("SELECT * FROM songs WHERE genre_id=$1", [genreId])
    .then(songs => {
      res.status(200).json({
        status: "succes!",
        songs: songs,
        message: "Songs by Genre received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getOneSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.one("SELECT * FROM songs WHERE id=$1", songId)
    .then(song => {
      res.status(200).json({
        status: "success!",
        song: song,
        message: "Song received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createSong = (req, res, next) => {
  console.log(req.body);
  db.none(
    "INSERT INTO songs(title, img_url, user_id, genre_id) VALUES (${title}, ${img_url}, ${user_id}, ${genre_id})",
    {
      title: req.body.title,
      img_url: req.body.img_url,
      user_id: parseInt(req.body.user_id),
      genre_id: parseInt(req.body.genre_id)
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Song created!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.result("DELETE FROM songs WHERE id=$1", songId)
    .then(result => {
      res.status(200).json({
        status: "success!",
        message: "song deleted",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllSongs,
  getSongsForGenre,
  getOneSong,
  createSong,
  deleteSong
};
