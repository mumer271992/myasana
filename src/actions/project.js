import Projects from '../services/Projects';
import { showErrorMessage } from './alert';
import { showLoader, hideLoader } from './loading';

const saveProjects = list => ({
  type: 'SAVE_PROJECTS',
  projects: list,
});

const saveProject = project => ({
  type: 'SAVE_PROJECT',
  project,
});

/* Async Action Creators */

export const create = (project, history) => (dispatch) => {
  dispatch(showLoader());
  Projects.create(project).then((resp) => {
    dispatch(hideLoader());
    if (resp.success) {
      dispatch(saveProject(resp.project));
      history.push('/dashboard/list');
    }
  })
    .catch(() => {
      dispatch(hideLoader());
      dispatch(showErrorMessage('Error occured'));
    });
};

export const getList = () => (dispatch) => {
  dispatch(showLoader());
  Projects.getList().then((resp) => {
    dispatch(hideLoader());
    dispatch(saveProjects(resp));
  })
    .catch(() => {
      dispatch(hideLoader());
      dispatch(showErrorMessage('Error occured'));
    });
};
