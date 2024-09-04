import React from 'react';
import { Line } from 'react-chartjs-2';

const ProgressChart = ({ workouts }) => {
    const data = {
        labels: workouts.map(workout => new Date(workout.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Weight Progression (kg)',
                data: workouts.map(workout => workout.weight),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                }
            }
        }
    };

    return (
        <div>
            <h2>Workout Progress</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ProgressChart;
