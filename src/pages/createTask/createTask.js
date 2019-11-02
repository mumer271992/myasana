/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import uuid from 'uuid';

import Dropdown from '../../components/Dropdown/Dropdown';
import './CreateTask.scss';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      owner: '',
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
          id: 1,
          name: 'Complete',
          value: 'complete',
        }
      ],
    };
    this.onSelectOwner = this.onSelectOwner.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  onSelectOwner(id) {
    this.setState({
      owner: id,
    });
  }

  onSelectStatus = (id) => {
    this.setState({
      status: id,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { createTask, history, match } = this.props;
    const { title, description, owner } = this.state;
    const task = {
      uuid: uuid(),
      title,
      description,
      owner,
      project_uuid: match.params.project_uuid,
      status: 'to_do',
    };
    const successRedirectUrl = `/dashboard/${match.params.project_uuid}/tasks`;
    createTask(task, history, successRedirectUrl);
  }

  render() {
    const { teamMembers, statuses } = this.state;
    return (
      <div className="create-task">
        <form onSubmit={this.onSubmit}>
          <h4>Create Task</h4>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Assignee</label>
            <Dropdown
              title="Assignee"
              list={teamMembers}
              onSelectOwner={this.onSelectOwner}
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
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
