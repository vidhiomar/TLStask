const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '../data/progress.json');

// Get user progress
const getUserProgress = (req, res) => {
    const userId = req.params.userId;
    const data = JSON.parse(fs.readFileSync(progressFile));
    const userProgress = data.find(p => p.userId === userId);
    res.json(userProgress || { userId, completed: [] });
};

// Mark an exercise as complete
const markExerciseComplete = (req, res) => {
    const { userId, exerciseId } = req.body;
    const data = JSON.parse(fs.readFileSync(progressFile));
    let userProgress = data.find(p => p.userId === userId);

    if (!userProgress) {
        userProgress = { userId, completed: [] };
        data.push(userProgress);
    }

    if (!userProgress.completed.includes(exerciseId)) {
        userProgress.completed.push(exerciseId);
    }

    fs.writeFileSync(progressFile, JSON.stringify(data, null, 2));
    res.json({ message: 'Progress updated' });
};

module.exports = { getUserProgress, markExerciseComplete };
