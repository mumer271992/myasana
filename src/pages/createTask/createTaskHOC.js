import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreateTask from 'pages/createTask/createTask';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTask));
