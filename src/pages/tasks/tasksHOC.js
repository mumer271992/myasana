import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tasks from 'pages/tasks/tasks';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tasks));
