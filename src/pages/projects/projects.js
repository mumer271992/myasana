import React from 'react';

import './projects.scss';

class Projects extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log("Fetching Projects List")
    this.props.getProjects()
  }

  onAddProject = () => {
    this.props.history.push('/dashboard/create');
  }

  render() {
    let { projects } = this.props
    projects = projects.slice(0,5);
    return (
      <div className="projects-page">
        <div className="projects-header d-flex flex-row justify-content-between">
          <h3>My Projects List</h3>
          <button className="btn btn-primary" onClick={this.onAddProject}>Add new Project</button>
        </div>
        {
          projects &&
          <div className="projects-list">
            {
              projects.map((project, index) => {
                return (
                  <div key={index} className="item">
                    {project.title}
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default Projects;