const Meal = require('../models/Meal');

// Create meal log
exports.createMeal = async (req, res) => {
    const { mealType, calories } = req.body;

    try {
        const meal = new Meal({
            user: req.user.userId,  // Get user from JWT
            mealType,
            calories
        });
        await meal.save();
        res.status(201).json(meal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all meals for a user
exports.getMeals = async (req, res) => {
    try {
        const meals = await Meal.find({ user: req.user.userId }).sort({ date: -1 });
        res.json(meals);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
