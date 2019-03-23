const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongsForGenre,
  getOneSong,
  createSong,
  deleteSong
} = require("../db/queries/songsQueries");

router.get("/", getAllSongs);
router.get("/byGenre/:id", getSongsForGenre);
router.get("/:id", getOneSong);
router.post("/", createSong);
router.delete("/:id", deleteSong);

module.exports = router;
