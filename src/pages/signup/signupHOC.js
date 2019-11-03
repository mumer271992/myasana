import { connect } from 'react-redux';
import Signup from './Signup';

import { signup } from '../../actions/user';

const mapDispatchToProps = dispatch => ({
  signupUser: user => dispatch(signup(user)),
});

export default connect(null, mapDispatchToProps)(Signup);
