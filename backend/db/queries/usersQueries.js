const { db } = require("../index.js");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      res.status(200).json({
        status: "success",
        users: users,
        message: "Users received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", [userId])
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "User received"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createUser = (req, res, next) => {
  db.none("INSERT INTO users (username) VALUES (${username})", {
    username: req.body.username
  })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "User created!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        result: result,
        message: "User deleted"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getUserFavoriteSongs = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT songs.id, title, img_url, COUNT(favorites.user_id) AS favorites, songs.user_id AS poster_id, users.username AS poster, genre_name AS genre, ARRAY_AGG(DISTINCT comment_body) AS comments FROM songs JOIN users ON users.id = songs.user_id JOIN favorites ON songs.id = favorites.song_id JOIN genres ON genres.id = songs.genre_id JOIN comments ON songs.id = comments.song_id WHERE favorites.user_id =$1 GROUP BY songs.id, title, img_url, poster_id, poster, genre ORDER BY favorites DESC",
    [userId]
  )
    .then(songs => {
      res.status(200).json({
        status: "success",
        songs: songs,
        message: "Songs favorited by user received"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getUserPostedSongs = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT songs.id, title, img_url, songs.user_id,COUNT(favorites.song_id) AS favorites, genre_id, genre_name AS genre, ARRAY_AGG(DISTINCT comment_body) AS comments FROM songs JOIN genres ON genres.id = songs.genre_id JOIN favorites ON songs.id = favorites.song_id JOIN comments ON songs.id = comments.song_id WHERE songs.user_id=$1 GROUP BY songs.id, title, img_url, songs.user_id, genre_id, genre",
    [userId]
  )
    .then(songs => {
      res.status(200).json({
        status: "success!",
        songs: songs,
        message: "Songs by User received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  getUserFavoriteSongs,
  getUserPostedSongs
};
