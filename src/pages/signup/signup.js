/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';

import 'pages/login/login.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInpuChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { signupUser } = this.props;
    signupUser({ ...this.state });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="page login-page">
        <h2 className="text-center logo">My Asana</h2>
        <div className="form-container">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleInpuChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInpuChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <p>
              Already have an account?
              <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
