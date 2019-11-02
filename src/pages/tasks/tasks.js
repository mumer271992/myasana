import React from 'react';

import 'pages/tasks/tasks.scss';
import Task from 'components/task/task';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/modal';
import TaskEdit from 'components/TaskEdit/TaskEditHOC';
import TasksService from '../../services/Tasks';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      loading: false,
      showModal: false,
      selectedTask: {},
    };
  }

  // addTask = (e) => {
  //   e.preventDefault();
  //   const tmpTask = {
  //     title: 'New Task',
  //     uuid: '',
  //     description: '',
  //     due_date: null,
  //     status: 'todo',
  //     project_uuid: props.match.params.project_uuid,
  //     user_uuid: '',
  //   };
  //   const tasks = [ ...this.state.tasks, tmpTask ];
  //   console.log("Adding temp task");
  //   console.log(tasks);
  //   this.setState(state => ({ tasks }));
  // }
  componentDidMount() {
    console.log("Fetching Tasks List");
    const { project_uuid } = this.props.match.params;
    this.props.getTasks(project_uuid);
  }

  addTask = (e) => {
    e.preventDefault();
    const { history, match } = this.props;
    history.push(`/dashboard/${match.params.project_uuid}/create`);
  }

  selectTask = (task) => {
    console.log("Selected Task: ", task);
    this.setState(() => ({
      selectedTask: task,
      showModal: true,
    }))
  }

  hideModal = () => {
    this.setState(() => ({
      showModal: false,
    }))
  }

  render() {
    const { project_uuid } = this.props.match.params;
    const { tasks, loading } = this.props;
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
              loading ? (
                <Loader />
              ) : (
                tasks.map(task => <Task key={task.uuid} task={task} openModalHandler={this.selectTask} />)
              )
            }
          </div>
          <div className="column">
            <div><b>In Progress</b></div>
          </div>
          <div className="column">
            <div><b>Done</b></div>
          </div>
        </div>
        {
          this.state.showModal && (
            <Modal
              show={this.state.showModal}
              hideModal={this.hideModal}>
                <TaskEdit
                  task={this.state.selectedTask}
                />
            </Modal>
          )
        }
      </div>
    );
  }
}

export default Tasks;
