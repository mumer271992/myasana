/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Route } from 'react-router-dom'; 


import SideBar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/NavbarHOC';
import Projects from '../Projects/ProjectsHOC';
import Tasks from '../Tasks/TasksHOC';
import CreateProject from '../CreateProject/CreateProjectHOC';
import CreateTask from '../CreateTask/CreateTaskHOC';
import './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page dashboard-page w-100">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Navbar />
            <Route path={`${match.path}/list`} component={Projects} />
            <Route path={`${match.path}/create`} component={CreateProject} />
            <Route path={`${match.path}/:projectUuid/tasks`} component={Tasks} />
            <Route path={`${match.path}/:projectUuid/create`} component={CreateTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
