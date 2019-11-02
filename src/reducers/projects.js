const defaultState = {
  projects: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_PROJECTS':
      return {
        projects: [...action.projects],
      };
    case 'SAVE_PROJECT':
      return {
        projects: [...state.projects, { ...action.project }]
      };
    default:
      return state;
  }
};
