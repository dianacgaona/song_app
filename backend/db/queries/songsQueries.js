const { db } = require("../index.js");

const getAllSongs = (req, res, next) => {
  db.any(
    "SELECT songs.id, title, img_url, COUNT(favorites.song_id) AS favorites, songs.user_id AS poster_id, users.username AS poster, genres.genre_name AS genre, ARRAY_AGG(DISTINCT comment_body) AS comments FROM songs JOIN favorites ON songs.id = favorites.song_id JOIN users ON users.id = songs.user_id JOIN genres ON genres.id = songs.genre_id JOIN comments ON comments.song_id = songs.id GROUP BY songs.id, title, img_url, poster_id, poster, genre ORDER BY favorites DESC"
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

// const getUserFavoriteSongs = (req, res, next) => {
//   let userId = parseInt(req.params.id);
//   db.any(
//     "SELECT songs.id, title, img_url, COUNT(favorites.song_id) AS favorites, songs.user_id AS poster_id, users.username AS poster FROM songs JOIN users ON users.id = songs.user_id JOIN favorites ON songs.id = favorites.song_id WHERE favorites.user_id = 1 GROUP BY songs.id, title, img_url, poster_id, poster ORDER BY favorites DESC",
//     [userId]
//   )
//     .then(songs => {
//       res.status(200).json({
//         status: "success",
//         songs: songs,
//         message: "Songs favorited by user received"
//       });
//     })
//     .catch(err => {
//       return next(err);
//     });
// };
//
// const getUserPostedSongs = (req, res, next) => {
//   let userId = parseInt(req.params.id);
//   db.any("SELECT * FROM songs WHERE user_id=$1", [userId])
//     .then(songs => {
//       res.status(200).json({
//         status: "success!",
//         songs: songs,
//         message: "Songs by User received!"
//       });
//     })
//     .catch(err => {
//       return next(err);
//     });
// };

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
  // getUserFavoriteSongs,
  // getUserPostedSongs,
  getOneSong,
  createSong,
  deleteSong
};
