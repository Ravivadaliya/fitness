import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Paper } from '@mui/material';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import ProgressChart from '../components/ProgressChart';
import MealForm from '../components/MealForm';
import MealList from '../components/MealList';

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);
    const [meals, setMeals] = useState([]);

    const fetchWorkouts = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('/api/workouts', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setWorkouts(res.data);
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    const fetchMeals = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('/api/meals', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMeals(res.data);
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    useEffect(() => {
        fetchWorkouts();
        fetchMeals();
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <WorkoutForm fetchWorkouts={fetchWorkouts} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <MealForm fetchMeals={fetchMeals} />
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <ProgressChart workouts={workouts} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <WorkoutList workouts={workouts} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <MealList meals={meals} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
