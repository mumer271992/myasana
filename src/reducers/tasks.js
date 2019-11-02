const defaultState = {
  tasks: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_TASKS': {
      const tasks = [...action.tasks];
      return {
        tasks,
      };
    }
    case 'UPDATE_TASK': {
      const { tasks } = state;
      const index = state.tasks.findIndex(item => item.fbKey === action.taskId);
      if (index < 0) {
        return state;
      }
      tasks[index] = { ...action.task };
      return {
        tasks,
      };
    }
    default:
      return state;
  }
};
