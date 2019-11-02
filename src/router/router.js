import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateRoute from './PrivateRoute';
import { clearMessage } from '../actions/alert';

/* Load All Pages */
import Login from '../pages/Login/LoginHOC';
import Signup from '../pages/Signup/SignupHOC';
import Dashboard from '../pages/Dashboard/DashboardHOC';

const Router = ({ alert, clear }) => (
  <div>
    {
      alert.message
      && (
        <div className={`message ${alert.type}`}>
          {alert.message}
          {clear()}
        </div>
      )
    }
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (<Redirect to="/dashboard/list" />)}
        />
        <Route
          path="/signin"
          component={Login}
        />
        <Route
          path="/signup"
          component={Signup}
        />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

Route.propTypes = {
  alert: PropTypes.objectOf({ message: PropTypes.string }),
  clear: PropTypes.func,
};

Route.defaultProps = {
  alert: {
    message: '',
  },
  // eslint-disable-next-line no-console
  clear: () => console.log('clear method is not defined'),
};

const mapStateToProps = state => ({
  alert: state.alert,
});

const mapDispatchToProps = dispatch => ({
  clear: () => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
