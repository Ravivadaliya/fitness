import React from 'react';

const MealList = ({ meals }) => {
    return (
        <div>
            <h2>Your Meals</h2>
            {meals.map(meal => (
                <div key={meal._id}>
                    <h3>{meal.mealType}</h3>
                    <p>{meal.calories} calories</p>
                </div>
            ))}
        </div>
    );
};

export default MealList;
