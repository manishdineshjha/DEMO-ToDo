const loadTasksFromLocalStorage = () => {
    try {
      const serializedTasks = localStorage.getItem('tasks');
      if (serializedTasks === null) {
        return [];
      }
      return JSON.parse(serializedTasks);
    } catch (error) {
      console.error('Error loading tasks from local storage:', error);
      return [];
    }
  };
  
  const saveTasksToLocalStorage = (tasks) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      localStorage.setItem('tasks', serializedTasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  };
  
  const initialState = {
    allTasks: loadTasksFromLocalStorage(),
    completedTasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = action.payload;
        saveTasksToLocalStorage([...state.allTasks, newTask]);
        return {
          ...state,
          allTasks: [...state.allTasks, newTask],
        };
      case 'DELETE_TASK':
        const taskIdToDelete = action.payload.id;
        const updatedAllTasksAfterDelete = state.allTasks.filter(task => task.id !== taskIdToDelete);
        saveTasksToLocalStorage(updatedAllTasksAfterDelete);
        return {
          ...state,
          allTasks: updatedAllTasksAfterDelete,
          completedTasks: state.completedTasks.filter(task => task.id !== taskIdToDelete),
        };
      case 'COMPLETE_TASK':
        const taskIdToComplete = action.payload.id;
        const updatedAllTasksAfterComplete = state.allTasks.map(task =>
          task.id === taskIdToComplete ? { ...task, completed: true } : task
        );
        saveTasksToLocalStorage(updatedAllTasksAfterComplete);
        const taskToComplete = state.allTasks.find(task => task.id === taskIdToComplete);
        return {
          ...state,
          allTasks: updatedAllTasksAfterComplete,
          completedTasks: taskToComplete ? [...state.completedTasks, taskToComplete] : state.completedTasks,
        };
      case 'LOAD_TASKS':
        return {
          ...state,
          allTasks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  