export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(),
      text,
      completed: false,
    },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {
      id,
    },
  });
  
  export const completeTask = (id) => ({
    type: 'COMPLETE_TASK',
    payload: {
      id,
    },
  });
  
  export const loadTasks = (tasks) => ({
    type: 'LOAD_TASKS',
    payload: tasks,
  });
  