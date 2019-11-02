import { connect } from 'react-redux';
import Signup from './Signup';

import { signup } from '../../actions/user';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  signupUser: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
