const express = require('express');
const router = express.Router();
const {
  getCurrentUser,
  getCurrentUserPostedSongs,
  getCurrentUserFavoriteSongs,
} = require('../db/queries/currentUserQueries');

router.get('/:id', getCurrentUser);
router.get('/:id/posted', getCurrentUserPostedSongs);
router.get('/:id/favorited', getCurrentUserFavoriteSongs);

module.exports = router;
