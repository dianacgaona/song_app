const express = require("express");
const router = express.Router();

const {
  getAllGenres,
  getOneGenre,
  createGenre
} = require("../db/queries/genresQueries");

router.get("/", getAllGenres);
router.get("/:id", getOneGenre);
router.post("/", createGenre);

module.exports = router;
