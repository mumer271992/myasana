import { combineReducers } from 'redux';

import user from './user';
import alert from './alert';
import projects from './projects';
import loading from './loading';
import tasks from './tasks';

export default combineReducers({
  user,
  alert,
  projects,
  loading,
  tasks,
});
