import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { clearMessage } from '../actions/alert';

/* Load All Pages */

import Login from '../pages/login/loginHOC';
import Signup from '../pages/signup/signupHOC';
import  Dashboard from '../pages/dashboard/dashboardHOC';

const Router = ({ alert, clear, loading }) => {
    return (
      <div>
        {
          alert.message && 
          (<div className={`message ${alert.type}`}> {alert.message} {clear()}</div>)

        }
        {
          loading && 
          (<div className="loader">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>)
        }
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={ () => {
              return (<Redirect to="/dashboard/list" />)
            }} />
            <Route path="/signin" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <PrivateRoute path="/dashboard" component={ Dashboard } />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    alert: state.alert,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      setTimeout(() => {
        dispatch(clearMessage())
      }, 3000) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);