import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreateTask from 'pages/createTask/createTask';
import { create } from '../../actions/task';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createTask: (data, history, redirectUrl) => dispatch(create(data, history, redirectUrl)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTask));
