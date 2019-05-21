import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
)

const mapStateToProps = (state) => {
    let user = state.user
    return {
        isLoggedIn: user.isLoggedIn ? true : false
    }
}
export default withRouter(connect(mapStateToProps, null)(PrivateRoute));