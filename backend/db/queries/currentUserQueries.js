const { db } = require('../index.js');

const getCurrentUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then(user => {
      res.status(200).json({
        status: 'success',
        user: user,
        message: 'Doge received',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getCurrentUserFavoriteSongs = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    'SELECT songs.id, title, img_url, COUNT(favorites.song_id) AS favorites, songs.user_id AS poster_id, users.username AS poster FROM songs JOIN users ON users.id = songs.user_id JOIN favorites ON songs.id = favorites.song_id WHERE favorites.user_id =$1 GROUP BY songs.id, title, img_url, poster_id, poster ORDER BY favorites DESC',
    [userId]
  )
    .then(songs => {
      res.status(200).json({
        status: 'success',
        songs: songs,
        message: 'Songs favorited by user received',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getCurrentUserPostedSongs = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM songs WHERE user_id=$1', [userId])
    .then(songs => {
      res.status(200).json({
        status: 'success!',
        songs: songs,
        message: 'Songs by User received!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getCurrentUser,
  getCurrentUserFavoriteSongs,
  getCurrentUserPostedSongs,
};
