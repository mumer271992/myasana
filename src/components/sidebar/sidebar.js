import React from 'react';

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
            Home
          </div>
          <div className="sidebar-item cursor-pointer">
            My Tasks
          </div>
          <div className="sidebar-item cursor-pointer">
            My Projects
          </div>
      </div>
    );
  }
}

export default Sidebar;