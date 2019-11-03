import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import { signin } from '../../actions/user';

const mapDispatchToProps = dispatch => ({
  signinUser: (user, history) => dispatch(signin(user, history))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
