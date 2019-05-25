import React from 'react';

import 'pages/tasks/tasks.scss';
import Task from 'components/task/task';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'Task 1',
          uuid: '1',
          description: '',
          due_date: null,
          status: 'todo',
          project_uuid: props.match.params.project_uuid,
          user_uuid: '',
        },
        {
          title: 'Task 2',
          uuid: '2',
          description: '',
          due_date: null,
          status: 'todo',
          project_uuid: props.match.params.project_uuid,
          user_uuid: '',
        },
        {
          title: 'Task 3',
          uuid: '3',
          description: '',
          due_date: null,
          status: 'todo',
          project_uuid: props.match.params.project_uuid,
          user_uuid: '',
        },
      ],
    };
  }

  addTask = (e) => {
    e.preventDefault();
    const tmpTask = {
      title: 'New Task',
      uuid: '',
      description: '',
      due_date: null,
      status: 'todo',
      project_uuid: props.match.params.project_uuid,
      user_uuid: '',
    };
    const tasks = [ ...this.state.tasks, tmpTask ];
    console.log("Adding temp task");
    console.log(tasks);
    this.setState(state => ({ tasks }));
  }

  addTask = (e) => {
    e.preventDefault();
    const { history, match } = this.props;
    history.push(`/dashboard/${match.params.project_uuid}/create`);
  }

  render() {
    const { project_uuid } = this.props.match.params;
    const { tasks } = this.state;
    return (
      <div className="tasks-page">
        <div className="tasks-header">
          <h3>My Tasks List { project_uuid } </h3>
          <button className="btn btn-primary" onClick={this.addTask}>Add Task</button>
        </div>
        <div className="tasks-list">
          <div className="column">
            <div><b>To Do</b></div>
            {
              tasks.map(task => <Task key={task.uuid} task={task} />)
            }
          </div>
          <div className="column">
            <div><b>In Progress</b></div>
          </div>
          <div className="column">
            <div><b>Done</b></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
