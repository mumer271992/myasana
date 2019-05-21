import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from 'components/navbar/navbar.js';
import { signout } from 'actions/user';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: (user, history) => dispatch(signin(user, history)),
        signoutUser: (history) => dispatch(signout(history)) 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));