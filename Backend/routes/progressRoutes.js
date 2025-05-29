// Import required modules
const express = require('express');
const router = express.Router();
const { getUserProgress, markExerciseComplete } = require('../controllers/progressController'); // Import progress controller functions

// Define routes for progress tracking
router.get('/:userId', getUserProgress); // Route to fetch user progress
router.post('/complete', markExerciseComplete); // Route to mark an exercise as complete

module.exports = router; // Export the router
