import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, saveWorkoutList } from '../Redux/actions';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './AddTask.css';


const AddTask = () => {
  const [description, setDescription] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(), 
        description: description, 
        isDone: false
      };
      dispatch(addTask(newTask)); 
      setDescription('');
    }
  };

  const handleSaveWorkout = () => {
    dispatch(saveWorkoutList(tasks));
  };

  const chartData = {
    labels: tasks.map(task => task.description),
    datasets: [{
      data: tasks.map(() => 1),
      backgroundColor: tasks.map(task => task.isDone ? '#4CAF50' : '#E0E0E0'),
      borderWidth: 0,
    }]
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div>
      <h2>Add New Workout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter workout description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="add-task">
          Add Workout
        </Button>
      </Form>

      {tasks.length > 0 && (
        <div className="workout-summary">
          <div className="chart-container" style={{ width: '200px', margin: '20px auto' }}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
          <Button 
            variant="success" 
            onClick={handleSaveWorkout}
            className="save-workout-btn"
          >
            Save Workout List
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddTask;