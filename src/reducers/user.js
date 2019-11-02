/* eslint-disable no-undef */
let defaultState = {
  first_name: '',
  last_name: '',
  email: '',
  isLoggedIn: false
};

const user = JSON.parse(localStorage.getItem('user'));
defaultState = { ...defaultState, ...user };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      localStorage.setItem('user', JSON.stringify({ ...state, ...action.user }));
      return user;
    }
    case 'CLEAR_USER': {
      return { ...state, ...defaultState };
    }
    default:
      return state;
  }
};
