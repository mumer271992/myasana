import Projects from '../services/Projects';
import { showSuccessMessage, showErrorMessage } from '../actions/alert';
import { showLoader, hideLoader } from '../actions/loading';
import { database } from 'firebase';

//////////* Actions */////////////

const saveProjects = (list) => {
  return {
    type: 'SAVE_PROJECTS',
    projects: list
  }
}

const saveProject = (project) => {
  return {
    type: 'SAVE_PROJECT',
    project: project
  }
}

/* Async Action Creators */

export const create = (project, history) => {
  return (dispatch) => {
    dispatch(showLoader());
    Projects.create(project).then((resp)=> {
      dispatch(hideLoader());
      if (resp.success) {
        dispatch(saveProject(resp.project))
        history.push("/dashboard/list")
      }
    }).catch(error => {
      console.log(error)
      dispatch(hideLoader());
      dispatch(showErrorMessage("Error occured"))
    })
  }
} 

export const getList = () => {
  return (dispatch) => {
    dispatch(showLoader());
    Projects.getList().then((resp) => {
      console.log(resp)
      dispatch(hideLoader());
      dispatch(saveProjects(resp))
    })
    .catch(error=> {
      console.log(error)
      dispatch(hideLoader());
      dispatch(showErrorMessage("Error occured"))
    })
  }
}
