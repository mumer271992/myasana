let defaultState = {}
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                type: action.alert.type,
                message: action.alert.message
            }
        case 'ERROR':
            return {
                type: action.alert.type,
                message: action.alert.message
            }
        case 'CLEAR':
            return {}
        default:
            return state;
    }
}