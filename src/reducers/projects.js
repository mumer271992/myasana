let defaultState = {
    projects: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SAVE_PROJECTS':
            let projects = [ ...action.projects ]
            return {
                projects: projects
            }
        case 'SAVE_PROJECT':
            let project = { ...action.project }
            return {
                projects: [ ...state.projects, project ]
            }
        default:
            return state;
    }
}