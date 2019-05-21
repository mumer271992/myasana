import React from 'react';

import './navbar.scss';

class Navabr extends React.Component {
  constructor (props) {
    super(props);
  }

  signoutUser = (e) => {
    e.preventDefault();
    this.props.signoutUser(this.props.history)
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">My Asana</a>
          <a className="btn btn-primary" onClick={this.signoutUser}>Signout</a>
        </nav>
      </div>
    );
  }
}

export default Navabr;