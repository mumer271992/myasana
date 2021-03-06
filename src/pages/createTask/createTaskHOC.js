import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreateTask from './CreateTask';
import { create } from '../../actions/task';


const mapDispatchToProps = dispatch => ({
  createTask: (data, history, redirectUrl) => dispatch(create(data, history, redirectUrl)),
});

export default withRouter(connect(null, mapDispatchToProps)(CreateTask));
