import React from 'react';
import { Route } from 'react-router-dom'; 

import './dashboard.scss';

import SideBar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbarHOC';
import Projects from '../projects/projectsHOC';
import Tasks from '../tasks/tasks';
import CreateProject from '../create/createHOC';
import CreateTask from 'pages/createTask/createTaskHOC';

class Dashboard extends React.Component {
  constructor(props){
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
            <Route path={`${match.path}/:project_uuid/tasks`} component={Tasks} />
            <Route path={`${match.path}/:project_uuid/create`} component={CreateTask} />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;