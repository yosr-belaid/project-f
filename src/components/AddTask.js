import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions'; 

const AddTask = () => {
  const [description, setDescription] = useState('');
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
    </div>
  );
};

export default AddTask;