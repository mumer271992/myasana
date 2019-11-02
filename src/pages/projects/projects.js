/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/loader';

import './Projects.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  onAddProject = () => {
    const { history } = this.props;
    history.push('/dashboard/create');
  }

  render() {
    let { projects } = this.props;
    const { loading } = this.props;
    projects = projects.slice(0, 5);
    return (
      <div className="projects-page">
        <div className="projects-header d-flex flex-row justify-content-between">
          <h3>My Projects List</h3>
          <button className="btn btn-primary" onClick={this.onAddProject}>Add new Project</button>
        </div>
        {
          projects
          && (
            <div className="projects-list">
              {
                loading ? (
                  <Loader />
                )
                  : (
                    projects.map((project, index) => (
                      <div key={index} className="item">
                        <Link to={`/dashboard/${project.uuid}/tasks`}>{project.title}</Link>
                      </div>
                    ))
                  )
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Projects;
