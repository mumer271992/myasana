/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import uuid from 'uuid';
import './CreateProject.scss';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    let project = null;
    const { title } = this.state;
    const { createProject, history } = this.props;
    if (title) {
      project = {
        uuid: uuid(),
        title
      };
      createProject(project, history);
    }
  }

  render() {
    return (
      <div className="create-projects">
        <h4>Create Project</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
