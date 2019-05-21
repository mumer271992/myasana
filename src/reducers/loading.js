let defaultState = { loading: false }
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return {
        loading: true
      }
    case 'HIDE_LOADER':
      return {
        loading: false
      }
    default:
      return state;
  }
}