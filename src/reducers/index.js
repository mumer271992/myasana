import { combineReducers } from 'redux';

import user from './user';
import alert from './alert';
import projects from './projects';
import loading from './loading';

export default combineReducers({
    'user': user,
    'alert': alert,
    'projects': projects,
    'loading': loading
})