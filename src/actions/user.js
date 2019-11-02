/* eslint-disable no-undef */
import Auth from '../services/Auth';
import { showSuccessMessage, showErrorMessage } from './alert';
import { showLoader, hideLoader } from './loading';

export const saveUser = user => ({
  type: 'SAVE_USER',
  user,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

/* Async Action Creators */

export const signup = user => (dispatch) => {
  dispatch(showLoader());
  Auth.signup(user).then((resp) => {
    dispatch(hideLoader());
    if (resp && resp.email) {
      dispatch(saveUser({ email: resp.email, isLoggedIn: true }));
    }
  }).catch(() => {
    dispatch(hideLoader());
  });
};

export const signin = (user, history) => (dispatch) => {
  dispatch(showLoader());
  Auth.signin(user).then((resp) => {
    dispatch(hideLoader());
    if (resp) {
      dispatch(saveUser({ email: resp.email, isLoggedIn: true }));
      history.push('/dashboard/list');
      dispatch(showSuccessMessage('User loggedIn successfully.'));
    }
  })
    .catch((error) => {
      dispatch(hideLoader());
      dispatch(showErrorMessage(error.message));
    });
}

export const signout = history => (dispatch) => {
  Auth.signout().then(() => {
    localStorage.removeItem('user');
    dispatch(clearUser());
    history.push('/signin');
  }).catch((error) => {
    dispatch(showErrorMessage(error.message));
  });
};
