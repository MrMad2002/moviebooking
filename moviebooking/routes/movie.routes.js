const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// Get all movies
router.get("/", movieController.getAllMovies);

// Get movie by ID
router.get("/:id", movieController.getMovieById);

// Create a new movie
router.post("/", movieController.createMovie);

// Update a movie by ID
router.put("/:id", movieController.updateMovie);

// Delete a movie by ID
router.delete("/:id", movieController.deleteMovie);

// Base URL: /api/movies
module.exports = router;
