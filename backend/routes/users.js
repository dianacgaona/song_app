const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  getUserPostedSongs,
  getUserFavoriteSongs,
} = require('../db/queries/usersQueries');

// const {} = require("../db/queries/songsQueries");

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.get('/:id/posted', getUserPostedSongs);
router.get('/:id/favorited', getUserFavoriteSongs);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
