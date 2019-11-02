import React from 'react';
import 'components/task/task.scss';

const Task = ({ task, openModalHandler }) => (
  <div className="task" onClick={(e) => openModalHandler(task)}>
    { task.title }
  </div>
);

export default Task;
