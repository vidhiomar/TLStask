// Import required modules
const express = require('express');
const router = express.Router();
const { getExercises, getExerciseById } = require('../controllers/exerciseController'); // Import exercise controller functions

// Define routes for exercises
router.get('/', getExercises); // Route to fetch all exercises
router.get('/:id', getExerciseById); // Route to fetch a specific exercise by ID

module.exports = router; // Export the router
