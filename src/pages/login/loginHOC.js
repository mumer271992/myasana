import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from 'pages/login/login';
import { signin } from 'actions/user';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: (user, history) => dispatch(signin(user, history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));