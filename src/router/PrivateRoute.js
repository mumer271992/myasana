import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.user && state.user.isLoggedIn,
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
