import { useSelector, useDispatch } from 'react-redux';
import { filtertask } from '../Redux/actions';
import { Button } from 'react-bootstrap';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks); 
  const filter = useSelector((state) => state.filter); 
  const dispatch = useDispatch();

  const toggleTaskStatus = (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, isDone: !taskToUpdate.isDone };
      dispatch({ type: 'EDIT_TASK', payload: updatedTask });
    }
  };

  const handleFilterChange = (filter) => {
    dispatch(filtertask(filter)); 
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === null) return true; 
    return task.isDone === filter;  
  });

  return (
    <div>
      
      <div className="filter-buttons">
        <Button onClick={() => handleFilterChange(true)} variant="warning">
          Show Done
        </Button>
        <Button onClick={() => handleFilterChange(false)} variant="danger">
          Show Not Done
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Workout Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className={task.isDone ? 'done' : 'not-done'}>
              <td>{task.description}</td>
              <td>{task.isDone ? 'Done' : 'Not Done'}</td>
              <td>
                <Button onClick={() => toggleTaskStatus(task.id)} variant="success">
                  check
                </Button>
                <Button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })} variant="danger" style={{ marginLeft: '10px' }}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTask;