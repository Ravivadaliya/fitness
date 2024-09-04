import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const WorkoutList = ({ workouts }) => {
    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Your Workouts
            </Typography>
            <List>
                {workouts.map(workout => (
                    <ListItem key={workout._id}>
                        <ListItemText
                            primary={`${workout.exercise} - ${workout.sets} sets x ${workout.reps} reps`}
                            secondary={`Weight: ${workout.weight} kg`}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default WorkoutList;
