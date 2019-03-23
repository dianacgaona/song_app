const { db } = require("../index.js");

const getAllGenres = (req, res, next) => {
  db.any("SELECT * FROM genres")
    .then(genres => {
      res.status(200).json({
        status: "success",
        genres: genres,
        message: "Genres received"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createGenre = (req, res, next) => {
  db.none("INSERT INTO genres (genre_name) VALUES (${genre_name})", {
    genre_name: req.body.genre_name
  })
    .then(() => {
      res.status(200).json({
        message: "Genre created!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = { getAllGenres, createGenre };
