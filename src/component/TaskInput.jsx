import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className='container my-4'>
      <div className='input-group gap-2'>
        <input 
          type='text' 
          className='form-control' 
          placeholder='Enter task' 
          value={taskText} 
          onChange={handleChange} 
          autoFocus
        />
        <button 
          className='btn btn-primary' 
          type='button' 
          onClick={handleSubmit}
          disabled={!taskText.trim()}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
