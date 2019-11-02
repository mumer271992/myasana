import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from 'components/navbar/navbar.js';
import { signin, signout } from '../../actions/user';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  signinUser: (user, history) => dispatch(signin(user, history)),
  signoutUser: history => dispatch(signout(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
