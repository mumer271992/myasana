import Auth from 'services/Auth';
import { showSuccessMessage, showErrorMessage } from 'actions/alert';
import { showLoader, hideLoader } from 'actions/loading';

//////////* Actions */////////////

export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        user
    }
}

export const clearUser = (user) => {
    return {
        type: 'CLEAR_USER'
    }
}

/* Async Action Creators */

export const signup = (user) => {
    return (dispatch) => {
        dispatch(showLoader());
        Auth.signup(user).then((resp) => {
            dispatch(hideLoader());
            if (resp && resp.email) {
                let user = {email: resp.email, isLoggedIn: true}
                dispatch(saveUser(user));
            }
        }).catch(() => {
            dispatch(hideLoader());
        })
    }
}

export const signin = (user, history) => {
    return (dispatch) => {
        dispatch(showLoader());
        Auth.signin(user).then((resp) => {
            dispatch(hideLoader());
            if (resp) {
                let user = {email: resp.email, isLoggedIn: true}
                dispatch(saveUser(user))
                history.push("/dashboard/list");
                dispatch(showSuccessMessage("User loggedIn successfully."))
            }
        })
        .catch(error => {
            dispatch(hideLoader());
            dispatch(showErrorMessage(error.message))
        })
    }
}

export const signout = (history) => {
    return (dispatch) => {
        Auth.signout().then((resp) => {
            localStorage.removeItem('user');
            dispatch(clearUser())
            history.push('/signin');
        }).catch((error) => {
            dispatch(showErrorMessage(error.message));
        });
    }
}