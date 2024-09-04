import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Paper } from '@mui/material';

const MealForm = ({ fetchMeals }) => {
    const [mealType, setMealType] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('/api/meals', { mealType, calories }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchMeals();
            setMealType('');
            setCalories('');
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Meal Type (e.g., Breakfast)"
                        value={mealType}
                        onChange={(e) => setMealType(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Calories"
                        type="number"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                    >
                        Add Meal
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default MealForm;
