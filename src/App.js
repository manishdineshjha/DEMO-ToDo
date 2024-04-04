import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import reducer from './store/reducers';
import { loadTasks } from './store/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

function App() {
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      store.dispatch(loadTasks(tasks));
    }
  }, []);

  return (
    <Provider store={store}>
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <div className='container py-5'>
          <h1 className='text-center mb-4' style={{ color: '#343a40' }}>To-Do Application</h1>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
