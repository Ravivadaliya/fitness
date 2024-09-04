const express = require('express');
const { createWorkout, getWorkouts } = require('../controllers/workoutController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/', authMiddleware, createWorkout);
router.get('/', authMiddleware, getWorkouts);

module.exports = router;
