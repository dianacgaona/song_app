const express = require('express');
const router = express.Router();

const { getAllGenres, createGenre } = require('../db/queries/genresQueries');

router.get('/', getAllGenres);
router.post('/', createGenre);

module.exports = router;
