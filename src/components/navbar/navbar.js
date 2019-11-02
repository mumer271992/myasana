/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-useless-constructor */
import React from 'react';

import './Navbar.scss';

class Navabr extends React.Component {
  constructor(props) {
    super(props);
  }

  signoutUser = (e) => {
    e.preventDefault();
    const { signoutUser, history } = this.props;
    signoutUser(history);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="" />
          <a className="btn btn-light" onClick={this.signoutUser}>Signout</a>
        </nav>
      </div>
    );
  }
}

export default Navabr;
