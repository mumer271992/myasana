import Signup from './signup';
import { connect } from 'react-redux';

import { signup } from '../../actions/user';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);