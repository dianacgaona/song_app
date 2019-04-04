const express = require("express");
const router = express.Router();

const {
  getAllFavorites,
  getFavoritesForSong,
  getFavoritesForUser,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoritesQueries");

router.get("/", getAllFavorites);
router.get("/forSong/:id", getFavoritesForSong);
router.get("/forUser/:id", getFavoritesForUser);
router.post("/", createFavorite);
router.delete("/:userId/:songId", deleteFavorite);

module.exports = router;
