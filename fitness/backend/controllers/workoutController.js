const Workout = require('../models/Workout');

// Create workout log
exports.createWorkout = async (req, res) => {
    const { exercise, sets, reps, weight } = req.body;

    try {
        const workout = new Workout({
            user: req.user.userId,  // Get user from JWT
            exercise,
            sets,
            reps,
            weight
        });
        await workout.save();
        res.status(201).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all workouts for a user
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.userId }).sort({ date: -1 });
        res.json(workouts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
