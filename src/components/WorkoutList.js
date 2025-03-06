import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../Workouts.css'; 

const WorkoutList = () => {
  return (
    <div className="workout-page">
      <h1 className="text-white">Choose Your Workout Level</h1>
      <div className="workout-cards">
        {['beginner', 'intermediate', 'advanced'].map((level,i) => (
          <Card key={i} className="card">
            <Card.Img variant="top" src={`/images/${i+1}.jpg`} alt={level} />
            <Card.Body>
              <Card.Title className="card-title">{level.charAt(0).toUpperCase() + level.slice(1)}</Card.Title>
              <Link to={`/workouts/${level}`}>
                <Button className="card-button">View Workouts</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
