/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Dropdown from 'components/Dropdown/Dropdown';

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: '',
      owner: '',
      project_uuid: '',
      uuid: '',
      fbKey: '',
      teamMembers: [
        {
          id: 1,
          name: 'Muhammad Umer',
          value: 'mumer',
        },
        {
          id: 2,
          name: 'Muhammad Usman',
          value: 'musman',
        },
        {
          id: 3,
          name: 'Muhammad Usman',
          value: 'musman',
        },
        {
          id: 4,
          name: 'Muhammad Usman Mughal',
          value: 'musman',
        },
      ],
      statuses: [
        {
          id: 1,
          name: 'To Do',
          value: 'to_do',
        },
        {
          id: 2,
          name: 'In Progress',
          value: 'in_progress',
        },
        {
          id: 3,
          name: 'Complete',
          value: 'complete',
        }
      ],
    };
  }

  componentDidMount() {
    const { task } = this.props;
    this.setState(() => ({ ...task }));
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  onSelectOwner = (id) => {
    this.setState({
      owner: id,
    });
  }

  onSelectStatus = (id) => {
    this.setState({
      status: id,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { history, updateTask, task } = this.props;
    if (title) {
      delete task.teamMembers;
      updateTask({
        ...task,
        ...this.state
      }, history);
    }
  }

  render() {
    const { task } = this.props;
    const {
      title,
      description,
      teamMembers,
      statuses
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" placeholder="Title" value={title} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea type="text" name="description" className="form-control" placeholder="Description" value={description} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Assignee</label>
            <Dropdown
              title="Assignee"
              list={teamMembers}
              selected={task.owner}
              uniqueKey="id"
              onSelect={this.onSelectOwner}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <Dropdown
              title="To Do"
              list={statuses}
              uniqueKey="id"
              onSelect={this.onSelectStatus}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    );
  }
}

export default TaskEdit;
