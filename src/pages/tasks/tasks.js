/* eslint-disable react/button-has-type */
import React from 'react';

import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import TaskEdit from '../../components/TaskEdit/TaskEditHOC';
import Task from '../../components/Task/Task';
import './Tasks.scss';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedTask: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { getTasks } = this.props;
    getTasks(match.params.projectUuid);
  }

  addTask = (e) => {
    e.preventDefault();
    const { history, match } = this.props;
    history.push(`/dashboard/${match.params.projectUuid}/create`);
  }

  selectTask = (task) => {
    this.setState(() => ({
      selectedTask: task,
      showModal: true,
    }));
  }

  hideModal = () => {
    this.setState(() => ({
      showModal: false,
    }));
  }

  render() {
    const { tasks, loading } = this.props;
    const { showModal, selectedTask } = this.state;
    return (
      <div className="tasks-page">
        <div className="tasks-header">
          <h3>My Tasks List </h3>
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
          showModal && (
            <Modal
              show={showModal}
              hideModal={this.hideModal}
            >
              <TaskEdit
                task={selectedTask}
              />
            </Modal>
          )
        }
      </div>
    );
  }
}

export default Tasks;
