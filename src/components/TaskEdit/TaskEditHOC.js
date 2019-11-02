import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TaskEdit from './TaskEdit';

import { update } from '../../actions/task';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task, history) => dispatch(update(task.fbKey, task, history)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskEdit));
