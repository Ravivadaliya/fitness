const express = require('express');
const { createMeal, getMeals } = require('../controllers/mealController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected routes
router.post('/', authMiddleware, createMeal);
router.get('/', authMiddleware, getMeals);

module.exports = router;
