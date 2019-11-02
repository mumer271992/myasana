/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './Task.scss';

const Task = ({ task, openModalHandler }) => (
  <div className="task" onClick={() => openModalHandler(task)}>
    { task.title }
  </div>
);

export default Task;
