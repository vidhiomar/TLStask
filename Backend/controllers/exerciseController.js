const fs = require('fs');
const path = require('path');

const getExercises = (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/exercises.json'), 'utf-8');
        const exercises = JSON.parse(data);
        res.status(200).json(exercises);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load exercises.' });
    }
};

const getExerciseById = (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/exercises.json'), 'utf-8');
        const exercises = JSON.parse(data);
        const exercise = exercises.find(e => e.id === parseInt(req.params.id));
        if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
        res.status(200).json(exercise);
    } catch (err) {
        res.status(500).json({ error: 'Error loading exercise.' });
    }
};

module.exports = { getExercises, getExerciseById };
