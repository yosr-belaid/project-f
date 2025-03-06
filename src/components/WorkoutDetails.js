import React from 'react';
import { useParams } from 'react-router-dom';
import workouts from './workouts'; 
import '../Workouts.css'; 

const WorkoutDetails = () => {
  const { level } = useParams();
  const levelWorkouts = workouts[level];

  if (!levelWorkouts) {
    return <p>Level not found!</p>;
  }

  return (
    <div className="workout-details">
      <h1 className="text-white">{level.charAt(0).toUpperCase() + level.slice(1)} Workouts</h1>
      {['gym', 'home'].map((category) => (
        <div key={category}>
          <h2 className="text-white">{category.charAt(0).toUpperCase() + category.slice(1)} Workouts</h2>
          <div className="workout-list">
            {Object.keys(levelWorkouts[category]).map((dayType) => (
              <div key={dayType}>
                <h3 className="text-white">{dayType}</h3>
                <div className="workout-list">
                  {levelWorkouts[category][dayType].map((exercise, index) => (
                    <div key={index} className="exercise">
                      <img src={exercise.imgSrc} alt={exercise.name} />
                      <p>{exercise.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutDetails;
