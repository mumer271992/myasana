let defaultState = {
    first_name: '',
    last_name: '',
    email: '',
    isLoggedIn: false
}
let user = JSON.parse(localStorage.getItem('user'));

defaultState = { ...defaultState, ...user }
console.log("User state initialized")
console.log(defaultState)
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SAVE_USER': {
            let user = {
                ...state,
                ...action.user
            }
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        case 'CLEAR_USER': {
            let user = {
                ...state,
                ...defaultState
            }
            return user;
        }
        default:
            return state;
    }
}