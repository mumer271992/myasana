import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tasks from 'pages/tasks/tasks';
import { getList } from '../../actions/task';

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  loading: state.loading.loading,
});

const mapDispatchToProps = dispatch => ({
  getTasks: projectId => dispatch(getList(projectId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tasks));
