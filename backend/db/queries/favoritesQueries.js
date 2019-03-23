const { db } = require("../index.js");

const getAllFavorites = (req, res, next) => {
  db.any("SELECT * FROM favorites")
    .then(favorites => {
      res.status(200).json({
        status: "success!",
        favorites: favorites,
        message: "Favorites received"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getFavoritesForSong = (req, res, next) => {
  let songId = parseInt(req.params.id);
  db.any("SELECT * FROM favorites where song_id=$1", [songId])
    .then(favorites => {
      res.status(200).json({
        status: "success!",
        favorites: favorites,
        message: "Favorites for song received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getFavoritesForUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any("SELECT * FROM favorites where user_id=$1", [userId])
    .then(favorites => {
      res.status(200).json({
        status: "success!",
        favorites: favorites,
        message: "Favorites for song received!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createFavorite = (req, res, next) => {
  db.none(
    "INSERT INTO favorites(user_id, song_id) VALUES (${user_id}, ${song_id})",
    {
      user_id: parseInt(req.body.user_id),
      song_id: parseInt(req.body.song_id)
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Favorite created!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteFavorite = (req, res, next) => {
  let favoriteId = parseInt(req.params.id);
  db.result("DELETE FROM favorites WHERE id=$1", favoriteId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Favorite deleted",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllFavorites,
  getFavoritesForSong,
  getFavoritesForUser,
  createFavorite,
  deleteFavorite
};
