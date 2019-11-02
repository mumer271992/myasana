import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateProject from './CreateProject';

import { create } from '../../actions/project';


const mapDispatchToProps = dispatch => ({
  createProject: (project, history) => dispatch(create(project, history)),
})

export default withRouter(connect(null, mapDispatchToProps)(CreateProject));
