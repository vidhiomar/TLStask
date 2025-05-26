const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err.message));
