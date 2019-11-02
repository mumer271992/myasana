/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  signin = (e) => {
    e.preventDefault();
    const { history, signinUser } = this.props;
    signinUser({ ...this.state }, history);
  }

  render() {
    return (
      <div className="page login-page">
        <h2 className="text-center logo">My Asana</h2>
        <div className="form-container">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.signin}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.onChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <Link to="/signup">
            <button type="submit" className="btn btn-default">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
