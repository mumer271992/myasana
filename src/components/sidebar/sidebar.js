import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }
    
  render() {
    return (
      <div className="sidebar">
          <div className="sidebar-brand cursor-pointer">
            <h3>MyAsana</h3>
          </div>
          <div className="sidebar-item cursor-pointer">
            <Link to="/dashboard/list">Home</Link>
          </div>
          <div className="sidebar-item cursor-pointer">
            My Tasks
          </div>
          <div className="sidebar-item active cursor-pointer">
            <Link to="/dashboard/list">My Projects</Link>
          </div>
      </div>
    );
  }
}

export default Sidebar;