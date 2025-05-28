const express = require('express');
const router = express.Router();
const { getExercises, getExerciseById } = require('../controllers/exerciseController');

router.get('/', getExercises); // GET all exercises
router.get('/:id', getExerciseById); // GET single exercise

module.exports = router;
