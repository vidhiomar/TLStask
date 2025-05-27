const express = require('express');
const router = express.Router();
const { getUserProgress, markExerciseComplete } = require('../controllers/progressController');

router.get('/:userId', getUserProgress);
router.post('/complete', markExerciseComplete);

module.exports = router;
