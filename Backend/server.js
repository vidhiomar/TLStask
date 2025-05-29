// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config(); // Load environment variables from .env file

// Import route files
const userRoutes = require('./routes/userRoutes'); // Routes for user authentication
const exerciseRoutes = require('./routes/exerciseRoutes'); // Routes for exercises
const progressRoutes = require('./routes/progressRoutes'); // Routes for progress tracking

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests
app.use(express.static('public')); // Serve static files from the 'public' directory

// Define API routes
app.use('/api/user', userRoutes); // User-related routes (signup, signin)
app.use('/api/exercises', exerciseRoutes); // Exercise-related routes
app.use('/api/progress', progressRoutes); // Progress tracking routes

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err.message));
