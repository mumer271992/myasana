import CreateProject from './create';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { create } from '../../actions/project';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project, history) => dispatch(create(project, history)) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProject));