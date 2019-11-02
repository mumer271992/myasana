/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import Tasks from '../services/Tasks';
import { showLoader, hideLoader } from './loading';
import { showSuccessMessage, showErrorMessage } from './alert';

export const saveTasks = (list) => {
  return {
    type: 'SAVE_TASKS',
    tasks: list,
  };
};

export const updateTask = (taskId, task) => {
  return {
    type: 'UPDATE_TASK',
    task,
    taskId,
  };
};

/* Async actions */
export const create = (task, history, redirectUrl) => (dispatch) => {
  dispatch(showLoader());
  Tasks.create(task).then(res => {
    if (res && res.success) {
      dispatch(hideLoader());
      history.push(redirectUrl);
      dispatch(showSuccessMessage('Task is created'));
    }
  }).catch(() => {
    dispatch(hideLoader());
    dispatch(showSuccessMessage('Error occured'));
  });
};

export const editTask = () => {

};

export const getList = (projectId) => (dispatch) => {
  dispatch(showLoader());
  Tasks.getList(projectId).then((resp) => {
    dispatch(hideLoader());
    dispatch(saveTasks(resp));
  }).catch(() => {
    dispatch(hideLoader());
    dispatch(showErrorMessage('Error occured'));
  });
};

export const update = (taskKey, task, history) => (dispatch) => {
  Tasks.update(taskKey, task).then((resp) => {
    if (resp && resp.success) {
      dispatch(updateTask(taskKey, task));
    }
  }).catch(() => {
  });
};
