// Import required modules
const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/userController'); // Import user controller functions

// Define routes for user authentication
router.post('/signup', signup); // Route for user signup
router.post('/signin', signin); // Route for user signin

module.exports = router; // Export the router
