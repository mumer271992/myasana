import React from 'react';
import 'components/task/task.scss';

const Task = ({ task }) => (
  <div className="task">
    { task.title }
  </div>
);

export default Task;
