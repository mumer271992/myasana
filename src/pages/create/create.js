import React from 'react';
import { Route } from 'react-router-dom'; 
import uuid from 'uuid';
import './create.scss';

class CreateProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  onChange = (e) => {
    let { name, value } = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    let project = null
    if (this.state.title) {
      project = {
        uuid: uuid(),
        title: this.state.title
      }
      this.props.createProject(project, this.props.history)
    }
  }

  render() {
    const { match } = this.props;
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
    )
  }
}

export default CreateProject;